import {Body, Controller, Get, Post, Query, Param, Put, Headers} from '@nestjs/common';
import { validateAndGetUid } from 'src/utils';
import IChannelController from "./interfaces/channel-controller.interface";
import {ChannelDto} from "./interfaces/channel.dto";
import { Channel } from './interfaces/channel.interface';
import { ChannelService } from './channel.service';

@Controller('channels')
export class ChannelController implements IChannelController{

    constructor(private readonly channelService: ChannelService) {}

    @Post()
    public async createChannel(@Body() body: ChannelDto): Promise<Channel> {
        return this.channelService.createChannel(body);
    }

    @Put(":id")
    public async updateChannel(@Body() body: Channel): Promise<Channel> {
        return this.channelService.updateChannel(body);
    }


    @Get(':id')
    getChannel(@Param("id") channelId: string): Promise<Channel> {
        return this.channelService.getChannel(channelId)
    }

    @Get()
    public async getChannels( @Headers('authorization') authHeader: string): Promise<Channel[]> {
        const accountId = await validateAndGetUid(authHeader);
        console.log(accountId);
        console.log("HIT HI HIT HIT HIT HIT HIT");
        return this.channelService.getChannels(accountId);
    }
}
