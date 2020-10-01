import {ChannelDto} from "./channel.dto";
import { Channel } from "./channel.interface";

export default interface IChannelController {
    getChannels(accountId: number): Promise<Channel[]>,
    createDocument(body: ChannelDto): Promise<void>,
}