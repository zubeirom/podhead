import RESTAdapter from '@ember-data/adapter/rest';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends RESTAdapter {
  @service session;

  namespace = "api";

  // eslint-disable-next-line ember/require-computed-property-dependencies
  header = computed('session.data.authenticated.access_token', function() {
      let headers = {};
      if (this.session.isAuthenticated) {
          headers[
              "Authorization"
          ] = `Bearer ${this.session.data.authenticated.user.xa}`;
      }
      return headers;
  })
}
