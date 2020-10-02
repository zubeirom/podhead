import { Account } from './account.interface';
import { AccountDto } from './account.dto';

export interface IAccountStorage {
  indexName: string,
  getAccount(accountId: number): Promise<Account>,
  createDocument(payload: AccountDto): Promise<void>,
  createIndex(): Promise<void>,
  checkIfIndexExists(): Promise<boolean>
}