import { Account } from './account.interface';
import { AccountDto } from './account.dto';

export interface IAccountStorage {
  indexName: string,
  getAccount(accountId: string): Promise<Account>,
  createDocument(payload: AccountDto): Promise<void>,
  createIndex(): Promise<void>,
  checkIfIndexExists(): Promise<boolean>
}