import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import * as dotenv from 'dotenv';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import AccountStorage from './storage/account.storage';

dotenv.config()


@Module({
    imports: [ElasticsearchModule.register({
        node: process.env.LOCAL_ES
    })],
    controllers: [AccountController],
    providers: [AccountService, AccountStorage],
    exports: [AccountService]
})
export class AccountModule {}
