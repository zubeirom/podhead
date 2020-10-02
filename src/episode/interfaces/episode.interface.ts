export interface Episode {
    readonly id: number,
    readonly channelId: number,
    readonly author: string,
    readonly title: string,
    readonly description: string,
    readonly length: string,
    readonly size: string,
    readonly mediaUrl: string,
    readonly publishedAt: string,
    readonly updatedAt: string
}