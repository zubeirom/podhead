import { Injectable } from '@nestjs/common';
import IChannelService from "./interfaces/channel-service.interface";
import { ChannelDto } from "./interfaces/channel.dto";
import {Channel} from "./interfaces/channel.interface";
import ChannelStorage from './storage/channel.storage';
import { AccountService } from '../account/account.service';

@Injectable()
export class ChannelService implements IChannelService {

    constructor(private readonly channelStore: ChannelStorage, private readonly accountService: AccountService) {}

    public async createChannel(body: ChannelDto): Promise<void> {
        const account = await this.accountService.getAccount(body.accountId);
        await this.channelStore.createDocument(body, account);
    }

    public async getChannels(accountId: number): Promise<Channel[]> {
        return this.channelStore.getChannels(accountId);
    }

    getChannel(channelId: number): Promise<Channel> {
        return this.channelStore.getChannel(channelId);
    }

    updateChannel(channel: Channel): Promise<Channel> {
        return this.channelStore.updateChannel(channel);
    }
}
