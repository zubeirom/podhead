import {Injectable, Logger} from "@nestjs/common";
import {ElasticsearchService} from "@nestjs/elasticsearch";
import {IFeedStorage} from "../interfaces/feed-storage.interface";
import { Feed } from "../interfaces/feed.interface";
import { FeedSchema } from "./feed.schema";

@Injectable()
export class FeedStorage implements IFeedStorage {
    constructor(private readonly client: ElasticsearchService) {
        this.indexName = "feed";
    }

    indexName: string;

    checkIfIndexExists(): Promise<boolean> {
        return Promise.resolve(false);
    }

    async createDocument(feed: Feed): Promise<void> {
        const exists = await this.checkIfIndexExists();
        if(!exists) {
            await this.createIndex();
        }
        try {
            const body = { ...feed, createdAt: new Date(), updatedAt: new Date()}
            await this.client.index({
                index: this.indexName,
                op_type: "create",
                body
            });
        } catch(e) {
            Logger.log(e.body.error);
            throw e;
        }
    }

    async createIndex(): Promise<void> {
        try {
            await this.client.indices.create(FeedSchema)
        } catch (e) {
            Logger.error(e.body.error);
            throw e;
        }
    }

    getFeed(channelId: number): Promise<Feed> {
        return Promise.resolve(undefined);
    }

    updateFeed(episodeId: number): Promise<Feed> {
        return Promise.resolve(undefined);
    }
}