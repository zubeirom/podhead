import { Injectable } from '@nestjs/common';
import { FeedService } from 'src/feed/feed.service';
import IChannelService from "./interfaces/channel-service.interface";
import { ChannelDto } from "./interfaces/channel.dto";
import {Channel} from "./interfaces/channel.interface";
import ChannelStorage from './storage/channel.storage';
import { AccountService } from '../account/account.service';

@Injectable()
export class ChannelService implements IChannelService {

    constructor(private readonly channelStore: ChannelStorage, private readonly accountService: AccountService, private readonly feedService: FeedService) {}

    public async createChannel(body: ChannelDto): Promise<Channel> {
        const account = await this.accountService.getAccount(body.accountId);
        const channel = await this.channelStore.createDocument(body);
        await this.feedService.createChannelFeed(channel, account);
        return channel
    }

    public async getChannels(accountId: string): Promise<Channel[]> {
        return this.channelStore.getChannels(accountId);
    }

    getChannel(channelId: string): Promise<Channel> {
        return this.channelStore.getChannel(channelId);
    }

    public async updateChannel(channel: Channel): Promise<Channel> {
        const updated = await this.channelStore.updateChannel(channel);
        const account = await this.accountService.getAccount(channel.accountId);
        await this.feedService.updateFeed(updated, account);
        return updated
    }
}
