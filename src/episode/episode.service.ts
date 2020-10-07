import { Injectable } from '@nestjs/common';
import IEpisodeService from './interfaces/episode-service.interface';
import EpisodeStorage from './storage/episode.storage';
import { EpisodeDto } from './interfaces/episode.dto';
import { Episode } from './interfaces/episode.interface';
import { ChannelService } from '../channel/channel.service';
import { FeedService } from '../feed/feed.service';

@Injectable()
export class EpisodeService implements IEpisodeService{

    constructor(private readonly episodeStorage: EpisodeStorage, private readonly channelService: ChannelService, private readonly feedService: FeedService) {
    }

    public async createEpisode(body: EpisodeDto): Promise<void> {
        const episode = await this.episodeStorage.createDocument(body);
        const currentFeed = await this.feedService.getFeed(episode.channelId);
        const newFeed = this.feedService.addEpisode(currentFeed, episode, episode.channelImageUrl);
        await this.feedService.updateFeed(episode.channelId, newFeed);
    }

    public async getEpisodes(channelId: number): Promise<Episode[]> {
        return this.episodeStorage.getEpisodes(channelId)
    }

    public async getEpisode(episodeId: number): Promise<Episode> {
        return this.episodeStorage.getEpisode(episodeId);
    }
}
