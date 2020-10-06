import { Feed } from "./feed.interface";

export interface IFeedStorage {
    indexName: string,
    getFeed(channelId: string): Promise<Feed>,
    createDocument(feed: Feed): Promise<void>,
    updateFeed(channelId: string, feed: Feed): Promise<void>
    createIndex(): Promise<void>,
    checkIfIndexExists(): Promise<boolean>
}