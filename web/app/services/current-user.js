import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class CurrentUserService extends Service {
    @service session;
    @service store;

    async get() {
        const res = await this.store.findAll('account');
        console.log(res);
    }
}
