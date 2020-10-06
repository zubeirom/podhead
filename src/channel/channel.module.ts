import { Module } from '@nestjs/common';
import {ElasticsearchModule} from "@nestjs/elasticsearch";
import * as dotenv from 'dotenv'
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import ChannelStorage from "./storage/channel.storage";
import { AccountModule } from '../account/account.module';
import {FeedModule} from "../feed/feed.module";

dotenv.config()

@Module({
    imports: [ElasticsearchModule.register({
        node: process.env.LOCAL_ES
    }), AccountModule, FeedModule],
    controllers: [ChannelController],
    providers: [ChannelService, ChannelStorage],
    exports: [ChannelService]
})
export class ChannelModule {}
