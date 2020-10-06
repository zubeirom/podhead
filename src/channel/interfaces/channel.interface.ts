import { Category } from "src/types/category.enum";
import { Feed } from "src/feed/interfaces/feed.interface";
import { Language } from '../../types/language.enum';

export interface Channel {
    readonly id: string,
    readonly accountId: string,
    readonly channelImageUrl?: string,
    readonly channelName: string,
    readonly channelDescription?: string,
    readonly channelUrl: string
    readonly feed?: Feed,
    readonly language: Language
    readonly category: Category[],
    createdAt: Date,
    updatedAt: Date
}