import { Injectable } from '@nestjs/common';
import IChannelService from "./interfaces/channel-service.interface";
import ChannelStorage from "./storage/channel.storage";
import { Channel } from './interfaces/channel.interface';

@Injectable()
export class ChannelService implements IChannelService{

    constructor(private readonly channelStore: ChannelStorage) {}

    public async createChannel(body: Channel): Promise<void> {
        await this.channelStore.create(body);
    }
}
