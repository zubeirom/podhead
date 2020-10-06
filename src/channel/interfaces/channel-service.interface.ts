import { ChannelDto } from "./channel.dto";
import { Channel } from "./channel.interface";

export default interface IChannelService {
    getChannels(accountId: string): Promise<Channel[]>,
    getChannel(channelId: string): Promise<Channel>,
    createChannel(body: ChannelDto): Promise<Channel>,
    updateChannel(channel: Channel): Promise<Channel>
}