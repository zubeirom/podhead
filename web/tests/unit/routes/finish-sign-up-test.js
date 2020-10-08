import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | finishSignUp', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:finish-sign-up');
    assert.ok(route);
  });
});
