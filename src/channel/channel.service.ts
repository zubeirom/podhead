import { Injectable } from '@nestjs/common';
import IChannelService from "./interfaces/channel-service.interface";
import ChannelStorage from "./storage/channel.storage";
import { ChannelDto } from "./interfaces/channel.dto";
import {Channel} from "./interfaces/channel.interface";

@Injectable()
export class ChannelService implements IChannelService {

    constructor(private readonly channelStore: ChannelStorage) {}

    public async createChannel(body: ChannelDto): Promise<void> {
        await this.channelStore.createDocument(body);
    }

    public async getChannels(accountId: number): Promise<Channel[]> {
        return this.channelStore.getChannels(accountId);
    }
}
