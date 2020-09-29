import { Channel } from "./channel.interface";

export default interface IChannelService {
    createChannel(body: Channel): Promise<void>,
}