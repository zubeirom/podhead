import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {EpisodeSerializer, IEpisodeController} from './interfaces/episode-controller.interface';
import { EpisodeDto } from './interfaces/episode.dto';
import { EpisodeService } from './episode.service';

@Controller('episodes')
export class EpisodeController implements IEpisodeController {

    constructor(private readonly episodeService: EpisodeService) {
    }

    @Post()
    async createEpisode(@Body() body: EpisodeDto): Promise<void> {
        await this.episodeService.createEpisode(body);
    }

    @Get("id")
    public async getEpisode(@Param("id") episodeId: number): Promise<EpisodeSerializer> {
        return { episode: await this.episodeService.getEpisode(episodeId) };
    }

    @Get()
    public async getEpisodes(@Query("cid") channelId: number): Promise<EpisodeSerializer> {
        return { episodes: await this.episodeService.getEpisodes(channelId) };
    }
}
