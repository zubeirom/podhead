import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task } from "ember-concurrency";
import { set, action } from '@ember/object';
import ENV from "web/config/environment";

export default class ChannelsInfoController extends Controller {
    @service session;
    @service currentUser;

    @(task(function * () {
        set(this, "account", yield this.currentUser.peek())
    })).on("init") getChannels;

    account = null

    @task(function* (audio) {
        set(audio, "name", audio.id + "." + audio.extension);

        try {
            // yield audio.upload(`${ENV.host}/api/files`);
            const episode = this.store.createRecord('episode', {
                channelId: this.model.id,
                channelImageUrl: this.model.channelImageUrl,
                title: this.title,
                description: this.description,
                length: audio.size,
                mediaUrl: `http://${ENV.host}/api/files/${audio.name}`,
            });
            const newdoc = yield episode.save();
            console.log(newdoc);
            // set(this, "audio", "");
            // set(this, "title", "");
            // set(this, "description", "");
            // window.location.href = `../episode/${newdoc.id}`;
            // set(this, "loader", false);
        } catch (e) {
            this.toast.error("Something went wrong", "Error");
            set(this, "loader", false);
            console.error(e);
        }
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
