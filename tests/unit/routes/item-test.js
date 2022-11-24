import { module, test } from 'qunit';
import { setupTest } from 'ember-youtube-tut/tests/helpers';

module('Unit | Route | item', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:item');
    assert.ok(route);
  });
});
