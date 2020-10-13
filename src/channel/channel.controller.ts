import {Body, Controller, Get, Post, Param, Put, Headers} from '@nestjs/common';
import { validateAndGetUid } from 'src/utils';
import IChannelController, {ChannelSerializer} from "./interfaces/channel-controller.interface";
import {ChannelDto} from "./interfaces/channel.dto";
import { Channel } from './interfaces/channel.interface';
import { ChannelService } from './channel.service';

@Controller('channels')
export class ChannelController implements IChannelController{

    constructor(private readonly channelService: ChannelService) {}

    @Post()
    public async createChannel(@Body() body: ChannelDto): Promise<ChannelSerializer> {
        return { channel: await this.channelService.createChannel(body) };
    }

    @Put(":id")
    public async updateChannel(@Body() body: Channel): Promise<ChannelSerializer> {
        return { channel: await this.channelService.updateChannel(body) };
    }


    @Get(':id')
    public async getChannel(@Param("id") channelId: string): Promise<ChannelSerializer> {
        return { channel: await this.channelService.getChannel(channelId) };
    }

    @Get()
    public async getChannels( @Headers('authorization') authHeader: string): Promise<ChannelSerializer> {
        const accountId = await validateAndGetUid(authHeader);
        return { channels: await this.channelService.getChannels(accountId) };
    }
}
