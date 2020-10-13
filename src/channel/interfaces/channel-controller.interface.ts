import {ChannelDto} from "./channel.dto";
import { Channel } from "./channel.interface";

export interface ChannelSerializer {
    channels?: Channel[],
    channel?: Channel
}

export default interface IChannelController {
    getChannels(accountId: string): Promise<ChannelSerializer>,
    getChannel(channelId: string): Promise<ChannelSerializer>,
    createChannel(body: ChannelDto): Promise<ChannelSerializer>,
    updateChannel(body: Channel): Promise<ChannelSerializer>
}

