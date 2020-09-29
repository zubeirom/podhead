import { Channel } from "./channel.interface";

export default interface IChannelStorage {
    indexName: string,
    create(payload: Channel): Promise<void>,
    createIndex(): Promise<void>,
    checkIfIndexExists(): Promise<boolean>
}