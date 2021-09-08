import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-java-back-test-car-l');
  this.route('i-i-s-java-back-test-car-e',
  { path: 'i-i-s-java-back-test-car-e/:id' });
  this.route('i-i-s-java-back-test-car-e.new',
  { path: 'i-i-s-java-back-test-car-e/new' });
});

export default Router;
