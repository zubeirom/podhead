import {Category} from "../../types/category.enum";

export interface ChannelDto {
    readonly accountId: number,
    readonly channelImageUrl: string,
    readonly channelName: string,
    readonly channelDescription: string,
    readonly channelUrl: string
    readonly feedUrl: string,
    readonly category: Category,
    createdAt: Date,
    updatedAt: Date
}