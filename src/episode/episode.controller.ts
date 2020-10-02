import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { IEpisodeController } from './interfaces/episode-controller.interface';
import { EpisodeDto } from './interfaces/episode.dto';
import { Episode } from './interfaces/episode.interface';
import { EpisodeService } from './episode.service';

@Controller('episodes')
export class EpisodeController implements IEpisodeController {

    constructor(private readonly episodeService: EpisodeService) {
    }

    @Post()
    async createEpisode(body: EpisodeDto): Promise<void> {
        await this.episodeService.createEpisode(body);
    }

    @Get("id")
    getEpisode(@Param("id") episodeId: number): Promise<Episode> {
        return this.episodeService.getEpisode(episodeId);
    }

    @Get()
    getEpisodes(@Query("cid") channelId: number): Promise<Episode[]> {
        return this.episodeService.getEpisodes(channelId);
    }
}
