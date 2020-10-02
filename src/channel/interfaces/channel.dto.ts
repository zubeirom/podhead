import {Category} from "../../types/category.enum";
import {Language} from "../../types/language.enum";

export interface ChannelDto {
    readonly accountId: number,
    readonly channelImageUrl?: string,
    readonly channelName: string,
    readonly channelDescription: string,
    readonly channelUrl?: string
    readonly feed?: Record<string, any>,
    readonly category: Category[],
    readonly language: Language,
}