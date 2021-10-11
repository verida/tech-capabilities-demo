import Vue from "vue";
import { IRouteStore } from "@/interface";
import { RouteConfig } from "vue-router";
import Vuex from "vuex";
import { demoViews, exploreViewState, ExploreViewState } from "./exploreView";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...exploreViewState,
  },
  mutations: {
    demoDisplay(state: ExploreViewState, route: IRouteStore<RouteConfig>) {
      const currentIndex = demoViews.findIndex(
        (item) => item.link === route.currentPath.path
      );

      state.demos.next =
        demoViews.find((_, index) =>
          currentIndex >= demoViews.length
            ? index === 0
            : index === currentIndex + 1
        ) || demoViews[0];

      if (route.prevPath.path && route.prevPath.path !== "/") {
        state.demos.prev = demoViews.find(
          (item) => item.link === route.prevPath.path
        );
      }
    },
  },
  actions: {},
  modules: {},
});
