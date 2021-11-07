import { routes } from "@/constants/constant";
import { IRouteStore, IViewState, TLinks } from "@/interface";
import store from "store";

const DEMO_NAVIGATION = "demo_navigation";

export const demoViews = [
  {
    name: routes.CONNECT,
    link: "/connect",
    imagePath: "/media/connect-demo.PNG",
  },
  {
    name: routes.MESSAGE,
    link: "/send-message",
    imagePath: "/media/send-message-demo.png",
  },
  {
    name: routes.SCHEMALESS,
    link: "/schemaless-data",
    imagePath: "/media/store-data-demo.PNG",
  },
  {
    name: routes.SCHEMAS,
    link: "/store-data",
    imagePath: "/media/store-data-demo.PNG",
  },
  // {
  //   name: routes.REQUEST_DATA,
  //   link: "/request-data-respond",
  // },
  // {
  //   name: routes.SHARE_DATA,
  //   link: "/share-data",
  // },
];

const navigationState = store.get(DEMO_NAVIGATION);

const state = {
  demo: navigationState || [],
};

const getters = {
  demoCard: ({ demo }: IViewState): TLinks[] => {
    return demo;
  },
};

const mutations = {
  navigate(state: IViewState, route: IRouteStore<string>): void {
    const isFirstPage = demoViews[0].name === route.currentPath;
    const isLastPage =
      demoViews[demoViews.length - 1].name === route.currentPath;
    switch (true) {
      case isFirstPage: {
        state.demo = [];
        state.demo.push(demoViews[1]);
        store.set(DEMO_NAVIGATION, state.demo);
        break;
      }
      case isLastPage: {
        state.demo.pop();
        const currentIndex = demoViews.findIndex(
          (item) => item.name === route.currentPath
        );
        state.demo = [demoViews[currentIndex - 1]];
        store.set(DEMO_NAVIGATION, state.demo);
        break;
      }
      default: {
        const currentIndex = demoViews.findIndex(
          (item) => item.name === route.currentPath
        );
        state.demo = [demoViews[currentIndex - 1], demoViews[currentIndex + 1]];
        store.set(DEMO_NAVIGATION, state.demo);
        break;
      }
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
