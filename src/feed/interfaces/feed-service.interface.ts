import { ChannelDto } from "src/channel/interfaces/channel.dto";
import {Feed} from "./feed.interface";
import { Account } from '../../account/interfaces/account.interface';

export interface IFeedService {
    addEpisode(feed: Feed),
    createChannelFeed(channel: ChannelDto, id: number, account: Account): Feed
}