import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task } from "ember-concurrency";
import { set } from '@ember/object';

export default class ChannelsInfoController extends Controller {
    @service session;
    @service currentUser;

    @(task(function * () {
        set(this, "account", yield this.currentUser.peek())
    })).on("init") getChannels;

    episodes = null

    account = null
}
