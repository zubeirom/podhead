import { Episode } from './episode.interface';
import { EpisodeDto } from './episode.dto';

export interface IEpisodeStorage {
    indexName: string,
    getEpisodes(channelId: number): Promise<Episode[]>,
    createDocument(payload: EpisodeDto): Promise<Episode>,
    getEpisode(episodeId: number): Promise<Episode>
    createIndex(): Promise<void>,
    checkIfIndexExists(): Promise<boolean>
}