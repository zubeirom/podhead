import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task } from "ember-concurrency";
import { set } from '@ember/object';

export default class ChannelsIndexController extends Controller {
    @service session;
    @service currentUser;

    @(task(function * () {
        const res = yield this.store.findAll('channel');
        set(this, "channels", res);
        set(this, "account", yield this.currentUser.get())
    })).on("init") getChannels;

    channels = null

    account = this.currentUser.get();
}
