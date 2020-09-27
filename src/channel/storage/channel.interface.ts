import { Category } from "src/types/category.enum";

export interface Channel {
    readonly channelId: number,
    readonly accountId: number,
    readonly channelImageUrl: string,
    readonly channelName: string,
    readonly channelDescription: string,
    readonly channelUrl: string
    readonly feedUrl: string,
    readonly category: Category,
    readonly createdAt: Date,
    readonly updatedAt: Date
}