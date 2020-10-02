import { Module } from '@nestjs/common';
import {ElasticsearchModule} from "@nestjs/elasticsearch";
import * as dotenv from 'dotenv'
import { FeedService } from 'src/feed/feed.service';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import ChannelStorage from "./storage/channel.storage";
import { AccountModule } from '../account/account.module';

dotenv.config()

@Module({
    imports: [ElasticsearchModule.register({
        node: process.env.LOCAL_ES
    }), AccountModule],
    controllers: [ChannelController],
    providers: [ChannelService, ChannelStorage, FeedService],
    exports: [ChannelService]
})
export class ChannelModule {}
