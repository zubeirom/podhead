import { AccountDto } from './account.dto';
import { Account } from './account.interface';

export interface IAccountService {
  getAccount(accountId: number): Promise<Account>,
  createAccount(body: AccountDto): Promise<void>,
}