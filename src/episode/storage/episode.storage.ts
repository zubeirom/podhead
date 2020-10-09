import {Injectable, Logger} from "@nestjs/common";
import {ElasticsearchService} from "@nestjs/elasticsearch";
import {SearchResponse} from "../../types/searchResponse.interface";
import { IEpisodeStorage } from '../interfaces/episode-storage.interface';
import { Episode } from "../interfaces/episode.interface";
import { EpisodeDto } from '../interfaces/episode.dto';
import { EpisodeSchema } from './episode.schema';

@Injectable()
export default class EpisodeStorage implements IEpisodeStorage {
    indexName: string;

    constructor(private readonly client: ElasticsearchService) {
        this.indexName = "episode";
    }

    public async getEpisode(episodeId: number): Promise<Episode> {
        try {
            const res = await this.client.get({
                index: this.indexName,
                id: episodeId.toString()
            });
            return EpisodeStorage.mapData(res.body);
        } catch(e) {
            Logger.log(e.body.error);
            throw e;
        }
    }

    public async getEpisodes(channelId: number): Promise<Episode[]> {
        try {
            const res = await this.client.search({
                index: this.indexName,
                body: {
                    query: {
                        match: {channelId}
                    }
                }
            });
            return EpisodeStorage.mapDataCollection(res.body.hits.hits);
        } catch(e) {
            Logger.log(e.body.error);
            throw e;
        }
    }

    public async createDocument(payload: EpisodeDto): Promise<Episode> {
        const exists = await this.checkIfIndexExists();
        if(!exists) {
            await this.createIndex();
        }
        try {
            const body = { ...payload, createdAt: new Date(), updatedAt: new Date()}
            const res = await this.client.index({
                index: this.indexName,
                op_type: "create",
                body
            });
            return {id: res.body._id, ...JSON.parse(<string>res.meta.request.params.body)}
        } catch(e) {
            Logger.log(e.body.error);
            throw e;
        }
    }

    async checkIfIndexExists(): Promise<boolean> {
        const res = await this.client.indices.exists({index: this.indexName});
        return res.statusCode !== 404;
    }

    async createIndex(): Promise<void> {
        try {
            await this.client.indices.create(EpisodeSchema)
        } catch (e) {
            Logger.error(e.body.error);
        }
    }

    private static mapDataCollection(data: Array<SearchResponse>): Episode[] {
        return data.map(channel => {
            return {
                id: channel._id,
                ...channel._source
            }
        })
    }

    private static mapData(data): Episode {
        return { id: data._id, ...data._source }
    }

}