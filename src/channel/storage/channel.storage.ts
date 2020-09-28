import { Injectable } from "@nestjs/common";
import { Client } from "@elastic/elasticsearch";

@Injectable()
export default class ChannelStorage {
    constructor(private client: Client) {
    }
}