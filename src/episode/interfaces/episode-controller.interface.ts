import { Episode } from './episode.interface';
import { EpisodeDto } from './episode.dto';

export interface IEpisodeController {
    getEpisode(episodeId: number): Promise<Episode>,
    getEpisodes(channelId: number): Promise<Episode[]>,
    createEpisode(body: EpisodeDto): Promise<void>,
}