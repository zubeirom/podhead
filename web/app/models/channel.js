import Model, { attr } from '@ember-data/model';

export default class ChannelModel extends Model {
    @attr("string") accountId;
    @attr("string") channelImageUrl;
    @attr("string") channelName;
    @attr("string") channelDescription;
    @attr("string") channelUrl;
    @attr("string") language;
    @attr category;
    @attr("date") createdAt;
    @attr("date") updatedAt;
}
