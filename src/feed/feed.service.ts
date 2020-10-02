import { Injectable } from '@nestjs/common';
import * as RSS from 'rss';
import { ChannelDto } from 'src/channel/interfaces/channel.dto';
import * as dotenv from 'dotenv';
import { IFeedService } from './interfaces/feed-service.interface';
import { Feed } from './interfaces/feed.interface';
import { Account } from '../account/storage/account.interface';

dotenv.config();

@Injectable()
export class FeedService implements IFeedService {
    addEpisode(feed: Feed) {
        return FeedService.setupRss(feed);
    }

    private static setupRss(feed: Feed) {
        return new RSS(feed);
    }

    createChannelFeed(channel: ChannelDto, id: number, account: Account): Feed {
        return {
            title: channel.channelName,
            description: channel.channelDescription,
            feed_url: `${process.env.CLIENT_URL}/channel/${id}/feed.xml`,
            site_url: `${process.env.CLIENT_URL}/channel/${id}`,
            image_url: channel.channelImageUrl,
            generator: process.env.CLIENT_URL,
            language: channel.language,
            copyright: 'Copyright 2019 All rights reserved.',
            pubDate: channel.createdAt,
            custom_elements: [
                { 'itunes:type': 'episodic' },
                { 'itunes:summary': channel.channelDescription },
                { 'itunes:author': account.username },
                {
                    'itunes:owner': [
                        { 'itunes:name': account.firstName + account.lastName },
                        { 'itunes:email': account.email },
                    ],
                },
                {
                    'itunes:image': { _attr: { href: channel.channelImageUrl } },
                },
                {
                    'itunes:category': channel.category.map(category => {
                        return {
                            _attr: {
                                text: category
                            }
                        }
                    })
                },
            ],
            items: []
        };
    }
}
