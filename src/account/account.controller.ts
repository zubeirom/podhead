import {Controller, Post, Get, Body, Put, Headers} from '@nestjs/common';
import {AccountSerializer, IAccountController} from './interfaces/account-controller.interface';
import { AccountDto } from './interfaces/account.dto';
import { AccountService } from './account.service';
import {validateAndGetUid} from "../utils";

@Controller('accounts')
export class AccountController implements IAccountController {
    constructor(private readonly accountService: AccountService) {
    }

    @Post()
    createDocument(@Body() body: AccountDto): Promise<void> {
        return this.accountService.createAccount(body);
    }

    @Get()
    public async getAccount(@Headers('authorization') authHeader: string): Promise<AccountSerializer> {
        const accountId = await validateAndGetUid(authHeader);
        return { accounts: [await this.accountService.getAccount(accountId)] };
    }

    @Put(":id")
    public async updateAccount(@Body() account: AccountDto): Promise<AccountSerializer> {
        return { account: await this.accountService.updateAccount(account) };
    }
}
