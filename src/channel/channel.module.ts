import { Module } from '@nestjs/common';
import {ElasticsearchModule} from "@nestjs/elasticsearch";
import * as dotenv from 'dotenv'
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import ChannelStorage from "./storage/channel.storage";

dotenv.config()

@Module({
    imports: [ElasticsearchModule.register({
        node: process.env.LOCAL_ES
    })],
    controllers: [ChannelController, ],
    providers: [ChannelService, ChannelStorage]
})
export class ChannelModule {}
