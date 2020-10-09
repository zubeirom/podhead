import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ChannelsRoute extends Route {
  @service session;
  @service router

  beforeModel() {
      if(!this.session.isAuthenticated) {
          this.router.transitionTo("index");
      }
  }

  model() {
      return this.store.findAll('channel');
  }

}
