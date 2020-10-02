import {Injectable, Logger} from "@nestjs/common";
import {ElasticsearchService} from "@nestjs/elasticsearch";
import {generateId} from "../../utils";
import { FeedService } from '../../feed/feed.service';
import { Account } from "../interfaces/account.interface";
import { IAccountStorage } from '../interfaces/account-storage.interface';
import { AccountDto } from '../interfaces/account.dto';
import { AccountSchema } from './account.schema';

@Injectable()
export default class ChannelStorage implements IAccountStorage {
  indexName: string;

  constructor(private readonly client: ElasticsearchService, private readonly feedService: FeedService) {
      this.indexName = "account";
  }

  public async getAccount(accountId: number): Promise<Account> {
      try {
          const res = await this.client.get({
              index: this.indexName,
              id: accountId.toString()
          });
          return ChannelStorage.mapData(res.body);
      } catch(e) {
          Logger.log(e.body.error);
          throw e;
      }
  }

  public async createDocument(payload: AccountDto): Promise<void> {
      const exists = await this.checkIfIndexExists();
      if(!exists) {
          await this.createIndex();
      }
      try {
          await this.client.index({
              index: this.indexName,
              op_type: "create",
              id: generateId().toString(),
              body: payload
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

}