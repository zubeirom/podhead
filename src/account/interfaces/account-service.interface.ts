import { AccountDto } from './account.dto';
import { Account } from './account.interface';

export interface IAccountService {
  getAccount(accountId: string): Promise<Account>,
  createAccount(body: AccountDto): Promise<void>,
  updateAccount(body: AccountDto): Promise<Account>
}