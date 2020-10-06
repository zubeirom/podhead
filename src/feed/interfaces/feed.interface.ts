import { Language } from "src/types/language.enum";
import { Category } from "src/types/category.enum";

/* eslint-disable camelcase */
export interface Feed {
    id?: string,
    channelId: string,
    title: string,
    feed_url: string,
    site_url: string,
    generator?: string
    description?: string,
    image_url?: string,
    docs?: string,
    author?: string,
    managingEditor?: string,
    webMaster?: string,
    copyright?: string,
    language?: Language,
    categories?: Category[],
    pubDate?: Date,
    ttl?: number,
    hub?: string,
    custom_namespaces?: Record<string, any>,
    custom_elements?: Array<Record<string, any>>,
    items?: Array<Record<string, any>>,
    createdAt?: Date,
    updatedAt?: Date
}