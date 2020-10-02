import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { EpisodeController } from './episode.controller';
import { EpisodeService } from './episode.service';
import EpisodeStorage from './storage/episode.storage';
import { FeedService } from '../feed/feed.service';
import { ChannelModule } from '../channel/channel.module';

@Module({
    imports: [ElasticsearchModule.register({
        node: process.env.LOCAL_ES
    }), ChannelModule],
    controllers: [EpisodeController],
    providers: [EpisodeService, EpisodeStorage, FeedService]
})
export class EpisodeModule {}
