import {Feed} from "./feed.interface";
import { Account } from '../../account/interfaces/account.interface';
import { Channel } from '../../channel/interfaces/channel.interface';
import { Episode } from '../../episode/interfaces/episode.interface';

export interface IFeedService {
    addEpisode(feed: Feed, episode: Episode, image: string),
    createChannelFeed(channel: Channel, account: Account): Promise<void>
}