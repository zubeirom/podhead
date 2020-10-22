import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task } from "ember-concurrency";
import { set, action } from '@ember/object';

export default class ChannelsInfoController extends Controller {
    @service session;
    @service currentUser;

    @(task(function * () {
        set(this, "account", yield this.currentUser.peek())
    })).on("init") getChannels;

    account = null

    @task(function* (audio) {
        console.log(yield audio);
    }).maxConcurrency(3)
        .enqueue() uploadToServer

    @action
    uploadAudio(audio) {
        try {
            set(this, "load", true);
            set(this, "audio", audio);
            set(this, "load", false);
        } catch (error) {
            set(this, "load", false);
            console.error(error);
        }
    }

    @action
    save() {
        try {
            set(this, "loader", true);
            if(this.audio && this.title) {
                this.uploadToServer.perform(this.audio);
            } else {
                set(this, "loader", false);
            }
        } catch (error) {
            set(this, "loader", false);
            console.error(error)
        }
    }
}
