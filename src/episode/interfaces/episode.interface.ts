export interface Episode {
    readonly id: string,
    readonly channelId: string,
    readonly author: string,
    readonly title: string,
    readonly description: string,
    readonly length: string,
    readonly size: string,
    readonly channelImageUrl: string,
    readonly mediaUrl: string,
    readonly publishedAt: string,
    readonly updatedAt: string
}