import {Body, Controller, Get, Post, Query, Param} from '@nestjs/common';
import IChannelController from "./interfaces/channel-controller.interface";
import {ChannelDto} from "./interfaces/channel.dto";
import { Channel } from './interfaces/channel.interface';
import { ChannelService } from './channel.service';

@Controller('channels')
export class ChannelController implements IChannelController{

    constructor(private readonly channelService: ChannelService) {}

    @Post()
    public async createDocument(@Body() body: ChannelDto): Promise<void> {
        await this.channelService.createChannel(body);
    }

    @Get(':id')
    getChannel(@Param("id") channelId: number): Promise<Channel> {
        return this.channelService.getChannel(channelId)
    }

    @Get()
    public async getChannels(@Query("aid") accountId: number): Promise<Channel[]> {
        return this.channelService.getChannels(accountId);
    }
}
