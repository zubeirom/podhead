import { Account } from './account.interface';
import { AccountDto } from './account.dto';

export interface IAccountController {
    getAccount(accountId: string): Promise<Account>,
    createDocument(body: AccountDto): Promise<void>,
    updateAccount(boyd: AccountDto): Promise<Account>
}