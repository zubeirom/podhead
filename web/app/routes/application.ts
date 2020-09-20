import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class Application extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @service session: any;
}
