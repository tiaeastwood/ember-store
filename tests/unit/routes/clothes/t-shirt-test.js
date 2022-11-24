import { module, test } from 'qunit';
import { setupTest } from 'ember-youtube-tut/tests/helpers';

module('Unit | Route | clothes/t-shirt', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:clothes/t-shirt');
    assert.ok(route);
  });
});
