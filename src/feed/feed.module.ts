import { Module } from '@nestjs/common';
import {ElasticsearchModule} from "@nestjs/elasticsearch";
import { FeedController } from './feed.controller';
import {FeedService} from "./feed.service";
import { FeedStorage } from './storage/feed.storage';

@Module({
    imports: [ElasticsearchModule.register({
        node: process.env.LOCAL_ES
    })],
    controllers: [FeedController],
    providers: [FeedService, FeedStorage],
    exports: [FeedService]
})
export class FeedModule {}
