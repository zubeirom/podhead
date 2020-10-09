import {Injectable, Logger} from "@nestjs/common";
import {ElasticsearchService} from "@nestjs/elasticsearch";
import { Account } from "../interfaces/account.interface";
import { IAccountStorage } from '../interfaces/account-storage.interface';
import { AccountDto } from '../interfaces/account.dto';
import { AccountSchema } from './account.schema';

@Injectable()
export default class AccountStorage implements IAccountStorage {
  indexName: string;

  constructor(private readonly client: ElasticsearchService) {
      this.indexName = "account";
  }

  public async getAccount(accountId: string): Promise<Account> {
      try {
          const res = await this.client.get({
              index: this.indexName,
              id: accountId
          });
          return AccountStorage.mapData(res.body);
      } catch(e) {
          Logger.log(e.body.error);
          throw e;
      }
  }

  public async updateAccount(account: AccountDto): Promise<Account> {
      try {
          const b = await this.checkIfDocumentExists(account.id);
          if(!b) {
              await this.createDocument(account, true);
          } else {
              await this.client.update({
                  index: this.indexName,
                  id: account.id,
                  body: {
                      doc: { ...account, updatedAt: new Date() },
                      doc_as_upsert: true
                  }
              });
          }
          return this.getAccount(account.id);
      } catch(e) {
          Logger.error(e.body.error);
          throw e;
      }
  }

  public async createDocument(payload: AccountDto, nocheck = false): Promise<void> {
      if(!nocheck && !await this.checkIfIndexExists()) {
          await this.createIndex();
      }
      try {
          await this.client.index({
              index: this.indexName,
              id: payload.id,
              op_type: "create",
              body: { ...payload, createdAt: new Date(), updatedAt: new Date()}
          })
      } catch(e) {
          Logger.log(e.body.error);
          throw e;
      }
  }

  async checkIfIndexExists(): Promise<boolean> {
      const res = await this.client.indices.exists({index: this.indexName});
      return res.statusCode !== 404;
  }

  async createIndex(): Promise<void> {
      try {
          await this.client.indices.create(AccountSchema)
      } catch (e) {
          Logger.error(e.body.error);
      }
  }

  private static mapData(data): Account {
      return { id: data._id, ...data._source }
  }

  async checkIfDocumentExists(accountId: string): Promise<boolean> {
      try {
          const indexExists = await this.checkIfIndexExists();
          if(indexExists) {
              const res = await this.client.get({
                  index: this.indexName,
                  id: accountId
              });
              return res.body.found;
          }
          return false;
      } catch(e) {
          Logger.error(e.body);
          throw e;
      }
  }

}