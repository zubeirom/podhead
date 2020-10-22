import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class CurrentUserService extends Service {
    @service session;
    @service store;

    async get() {
        const res = await this.store.findAll('account');
        const account = res.get('firstObject');
        if(!account.profileImageUrl) {
            account.profileImageUrl = '/images/user_icon.jpg';
        }
        return account;
    }

    async peek() {
        const res = await this.store.peekAll('account');
        const account = res.get('firstObject');
        if(account && !account.profileImageUrl) {
            account.profileImageUrl = '/images/user_icon.jpg';
        }
        return account;
    }
}
