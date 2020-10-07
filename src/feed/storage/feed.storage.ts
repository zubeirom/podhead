import {Injectable, Logger} from "@nestjs/common";
import {ElasticsearchService} from "@nestjs/elasticsearch";
import {IFeedStorage} from "../interfaces/feed-storage.interface";
import { Feed } from "../interfaces/feed.interface";
import { FeedSchema } from "./feed.schema";
import {SearchResponse} from "../../types/searchResponse.interface";

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

    async getFeed(channelId: string): Promise<Feed> {
        try {
            const res = await this.client.search({
                index: this.indexName,
                body: {
                    query: {
                        match: { channelId }
                    }
                }
            });
            return FeedStorage.mapDataCollection(res.body.hits.hits)[0];
        } catch(e) {
            Logger.error(e.body);
            throw e;
        }
    }

    async updateFeed(channelId: string, feed: Feed): Promise<void> {
        try {
            await this.client.update({
                index: this.indexName,
                id: feed.id,
                body: {
                    doc: {
                        ...feed,
                        updatedAt: new Date()
                    }
                }
            })
        } catch(e) {
            Logger.error(e.body.error);
            throw e;
        }
    }

    private static mapData(data): Feed {
        return { id: data._id, ...data._source }
    }

    private static mapDataCollection(data: Array<SearchResponse>): Feed[] {
        return data.map(feed => {
            return {
                id: feed._id,
                ...feed._source
            }
        })
    }
}