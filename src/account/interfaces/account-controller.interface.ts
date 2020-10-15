import { Account } from './account.interface';
import { AccountDto } from './account.dto';

export interface AccountSerializer {
    accounts?: Account[],
    account?: Account
}

export interface IAccountController {
    getAccount(authHeader: string): Promise<AccountSerializer>,
    createDocument(body: AccountDto): Promise<void>,
    updateAccount(boyd: AccountDto): Promise<AccountSerializer>
}