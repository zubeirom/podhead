import { Channel } from "./channel.interface";

export default interface IChannelController {
    createDocument(body: Channel): Promise<void>,
}