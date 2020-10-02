import {ChannelDto} from "./channel.dto";
import { Channel } from "./channel.interface";

export default interface IChannelStorage {
    indexName: string,
    getChannels(accountId: number): Promise<Channel[]>,
    createDocument(payload: ChannelDto): Promise<void>,
    getChannel(channelId: number): Promise<Channel>
    createIndex(): Promise<void>,
    checkIfIndexExists(): Promise<boolean>
}