import {ChannelDto} from "./channel.dto";
import { Channel } from "./channel.interface";

export default interface IChannelController {
    getChannels(accountId: number): Promise<Channel[]>,
    getChannel(channelId: number): Promise<Channel>,
    createChannel(body: ChannelDto): Promise<void>,
}