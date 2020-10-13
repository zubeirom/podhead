import EmberRouter from '@ember/routing/router';
import config from 'web/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
    this.route('channels', function() {
        this.route('info', { path: ':channel_id'});
        this.route('new');
    });
    this.route('finishSignUp');
});
