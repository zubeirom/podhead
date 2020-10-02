import { EpisodeDto } from './episode.dto';
import { Episode } from './episode.interface';

export default interface IEpisodeService {
    getEpisode(episodeId: number): Promise<Episode>,
    getEpisodes(channelId: number): Promise<Episode[]>,
    createEpisode(body: EpisodeDto): Promise<void>,
}