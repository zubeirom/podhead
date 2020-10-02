import { Injectable } from '@nestjs/common';
import { IAccountService } from './interfaces/account-service.interface';
import { AccountDto } from './interfaces/account.dto';
import { Account } from './interfaces/account.interface';
import AccountStorage from './storage/account.storage';

@Injectable()
export class AccountService implements IAccountService {

    constructor(private readonly accountStorage: AccountStorage) {
    }

    getAccount(accountId: number): Promise<Account> {
        return this.accountStorage.getAccount(accountId)
    }

    async createAccount(body: AccountDto): Promise<void> {
        await this.accountStorage.createDocument(body);
    }

}
