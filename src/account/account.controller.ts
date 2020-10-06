import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { IAccountController } from './interfaces/account-controller.interface';
import { AccountDto } from './interfaces/account.dto';
import { AccountService } from './account.service';
import { Account } from './interfaces/account.interface';

@Controller('accounts')
export class AccountController implements IAccountController {
    constructor(private readonly accountService: AccountService) {
    }

    @Post()
    createDocument(@Body() body: AccountDto): Promise<void> {
        return this.accountService.createAccount(body);
    }

    @Get(":id")
    getAccount(@Param("id") accountId: string): Promise<Account> {
        return this.accountService.getAccount(accountId);
    }
}
