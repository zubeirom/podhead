import {ChannelDto} from "./channel.dto";
import { Channel } from "./channel.interface";
import { Account } from '../../account/interfaces/account.interface';

export default interface IChannelStorage {
    indexName: string,
    getChannels(accountId: string): Promise<Channel[]>,
    createDocument(payload: ChannelDto): Promise<Channel>,
    updateChannel(channel: Channel): Promise<Channel>,
    getChannel(channelId: string): Promise<Channel>
    createIndex(): Promise<void>,
    checkIfIndexExists(): Promise<boolean>
}