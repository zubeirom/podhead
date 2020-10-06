import {Episode} from "../../episode/interfaces/episode.interface";
import { Feed } from "./feed.interface";

export interface IFeedStorage {
    indexName: string,
    getFeed(channelId: number): Promise<Feed>,
    createDocument(feed: Feed): Promise<void>,
    updateFeed(episodeId: number): Promise<Feed>
    createIndex(): Promise<void>,
    checkIfIndexExists(): Promise<boolean>
}