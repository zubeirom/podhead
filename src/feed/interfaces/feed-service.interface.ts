import {Feed} from "./feed.interface";
import { Account } from '../../account/interfaces/account.interface';
import { Channel } from '../../channel/interfaces/channel.interface';
import { Episode } from '../../episode/interfaces/episode.interface';

export interface IFeedService {
    mapChannelToFeed(channel: Channel, account: Account, currentFeed?: Feed): Feed,
    addEpisode(feed: Feed, episode: Episode, image: string),
    createChannelFeed(channel: Channel, account: Account): Promise<void>,
    updateFeed(channelId: string, feed: Feed): Promise<void>,
    getFeed(channelId: string): Promise<Feed>
}