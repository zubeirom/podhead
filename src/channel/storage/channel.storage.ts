import {Injectable} from "@nestjs/common";
import {ElasticsearchService} from "@nestjs/elasticsearch";
import {ChannelSchema} from "./channel.schema";
import { Channel } from "../interfaces/channel.interface";
import IChannelStorage from "../interfaces/channel-storage.inteface";
import {generateId} from "../../utils";

@Injectable()
export default class ChannelStorage implements IChannelStorage {
    indexName: string;

    constructor(private readonly client: ElasticsearchService) {
        this.indexName = "channel";
    }

    public async create(payload: Channel): Promise<void> {
        if(!await this.checkIfIndexExists()) {
            await this.createIndex();
        }
        await this.client.index({
            index: this.indexName,
            id: generateId(),
            body: payload
        }, (err) => {
            if(err) throw err;
        })
    }

    async checkIfIndexExists(): Promise<boolean> {
        const res = await this.client.indices.exists({index: this.indexName});
        return res.statusCode === 404;
    }

    async createIndex(): Promise<void> {
        await this.client.indices.create(ChannelSchema,  (err) => {
            if (err) {
                throw err;
            }
        })
    }
}