import { Episode } from './episode.interface';
import { EpisodeDto } from './episode.dto';
import {Channel} from "../../channel/interfaces/channel.interface";

export interface EpisodeSerializer {
    episodes?: Episode[],
    episode?: Episode
}

export interface IEpisodeController {
    getEpisode(episodeId: number): Promise<EpisodeSerializer>,
    getEpisodes(channelId: number): Promise<EpisodeSerializer>,
    createEpisode(body: EpisodeDto): Promise<void>,
}