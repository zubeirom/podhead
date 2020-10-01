import { ChannelDto } from "./channel.dto";
import { Channel } from "./channel.interface";

export default interface IChannelService {
    getChannels(accountId: number): Promise<Channel[]>,
    createChannel(body: ChannelDto): Promise<void>,
}