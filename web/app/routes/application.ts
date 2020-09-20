import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import { Session } from 'session.interface';

export default class Application extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @service session!: Session;

  afterModel() {
    console.log(this.session);
  }
}
