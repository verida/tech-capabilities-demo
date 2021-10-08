export const Router = {
  routes: [],
  setRoutes: function (routes) {
    this.routes = [...this.routes, ...routes];
  },
  renderRoute: function () {
    const hash = window.location.hash.substr(1);

    let currentRoute = this.routes[0];

    for (let i = 0; i < this.routes.length; i++) {
      const route = this.routes[i];

      if (hash === route.url) {
        currentRoute = route;
      }
    }

    currentRoute.render();
  },
};
