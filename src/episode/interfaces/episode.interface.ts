export interface Episode {
    readonly id: number,
    readonly channelId: number,
    readonly title: string,
    readonly description: string,
    readonly length: string,
    readonly mediaUrl: string,
    readonly publishedAt: string,
    readonly updatedAt: string
}