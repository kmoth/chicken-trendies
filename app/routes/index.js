import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('https://api.spacexdata.com/v4/launches');
    let flights = await response.json();
    return flights;
  }
}
