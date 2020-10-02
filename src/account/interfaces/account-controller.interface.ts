import { Account } from './account.interface';
import { AccountDto } from './account.dto';

export interface IAccountController {
    getAccount(accountId: number): Promise<Account>,
    createDocument(body: AccountDto): Promise<void>
}