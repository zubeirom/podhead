import RESTAdapter from '@ember-data/adapter/rest';
import ENV from "../config/environment";
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends RESTAdapter {
  @service session;
  host = ENV.host;
  namespace = "api";
  headers = {
      'Authorization': `Bearer ${this.session.data.authenticated.user.xa}`,
  };
}
