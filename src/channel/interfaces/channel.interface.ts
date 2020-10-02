import { Category } from "src/types/category.enum";
import { Feed } from "src/feed/interfaces/feed.interface";

export interface Channel {
    readonly id: number,
    readonly accountId: number,
    readonly channelImageUrl: string,
    readonly channelName: string,
    readonly channelDescription: string,
    readonly channelUrl: string
    readonly feed: Feed,
    readonly language: string
    readonly category: Category[],
    createdAt: Date,
    updatedAt: Date
}