import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Session } from 'session.interface';

export default class Index extends Route.extend() {
  @service session!: Session
  @service router!: Route

  beforeModel() {
    if(this.session.isAuthenticated) {
      this.router.transitionTo("channels");
    }
  }

}
