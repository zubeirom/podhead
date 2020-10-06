export const FeedSchema = {
    index: 'feed',
    body: {
        settings: {},
        mappings: {
            properties: {
                channelId: { type: 'text'},
                title: { type: 'text'},
                description: { type: 'text'},
                feed_url: { type: 'text'},
                site_url: { type: 'text'},
                image_url: { type: 'text'},
                generator: { type: 'text'},
                language: { type: 'text'},
                copyright: { type: 'text'},
                pubDate: { type: 'date'},
                custom_elements: { type: 'array' },
                items: { type: 'array' },
                createdAt: { type: 'date'},
                updatedAt: { type: 'date'}
            }
        }
    }
}