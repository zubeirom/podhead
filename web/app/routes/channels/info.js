import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default class ChannelsInfoRoute extends Route {

    async afterModel(model) {
        const res = await this.store.query('episode', {
            cid: model.id
        });
        set(model, "episodes", res);
    }

}
