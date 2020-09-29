import {Body, Controller, Post} from '@nestjs/common';
import IChannelController from "./interfaces/channel-controller.interface";
import {ChannelService} from "./channel.service";
import {Channel} from "./interfaces/channel.interface";

@Controller('channel')
export class ChannelController implements IChannelController{

    constructor(private readonly channelService: ChannelService) {}

    @Post()
    public async createDocument(@Body() body: Channel): Promise<void> {
        await this.channelService.createChannel(body);
    }
}
