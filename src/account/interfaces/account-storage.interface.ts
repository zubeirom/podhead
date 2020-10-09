import { Account } from './account.interface';
import { AccountDto } from './account.dto';

export interface IAccountStorage {
  indexName: string,
  getAccount(accountId: string): Promise<Account>,
  updateAccount(account: Account): Promise<Account>
  createDocument(payload: AccountDto, nocheck: boolean): Promise<void>,
  createIndex(): Promise<void>,
  checkIfIndexExists(): Promise<boolean>,
  checkIfDocumentExists(accountId: string): Promise<boolean>
}