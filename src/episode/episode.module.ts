import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { EpisodeController } from './episode.controller';
import { EpisodeService } from './episode.service';
import EpisodeStorage from './storage/episode.storage';
import { ChannelModule } from '../channel/channel.module';
import {FeedModule} from "../feed/feed.module";

@Module({
    imports: [ElasticsearchModule.register({
        node: process.env.LOCAL_ES
    }), ChannelModule, FeedModule],
    controllers: [EpisodeController],
    providers: [EpisodeService, EpisodeStorage]
})
export class EpisodeModule {}
