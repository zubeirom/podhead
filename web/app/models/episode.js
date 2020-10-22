import Model, { attr } from '@ember-data/model';

export default class EpisodeModel extends Model {
    @attr('string') channelId;
    @attr('string') channelImageUrl;
    @attr('string') title;
    @attr('string') description;
    @attr('string') length;
    @attr('string') mediaUrl;
    @attr('date') publishedAt;
    @attr('date') updatedAt;
}
