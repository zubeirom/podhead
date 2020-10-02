import {Feed} from "./feed.interface";
import { Account } from '../../account/interfaces/account.interface';
import { Channel } from '../../channel/interfaces/channel.interface';

export interface IFeedService {
    addEpisode(feed: Feed),
    createChannelFeed(channel: Channel, account: Account): Feed
}