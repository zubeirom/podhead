export interface SearchResponse {
    _index: string,
    _type: string,
    _id: string,
    _score: number,
    _source: any,
    body?: any,
}