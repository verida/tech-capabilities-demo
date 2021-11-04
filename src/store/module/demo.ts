import { IRouteStore, IViewState, TLinks } from "@/interface";
import store from "store";

const DEMO_NAVIGATION = "demo_navigation";

export const demoViews = [
  {
    name: "Connect",
    link: "/connect",
    imagePath: "/media/connect-demo.PNG",
  },
  {
    name: "Send Message",
    link: "/send-message",
    imagePath: "/media/send-message-demo.png",
  },
  {
    name: "Store Schemaless Data",
    link: "/schemaless-data",
    imagePath: "/media/store-data-demo.PNG",
  },
  {
    name: "Store Data With Schema",
    link: "/store-data",
    imagePath: "/media/store-data-demo.PNG",
  },
  // {
  //   name: "Request Data",
  //   link: "/request-data-respond",
  // },
  // {
  //   name: "Share Data",
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
    const isFirstPage = demoViews[0].link === route.currentPath;
    const isLastPage =
      demoViews[demoViews.length - 1].link === route.currentPath;
    const hasTwoItemsInArray = state.demo.length === 2;
    switch (true) {
      case isFirstPage: {
        state.demo = [];
        state.demo.push(demoViews[1]);
        store.set(DEMO_NAVIGATION, state.demo);
        break;
      }
      case isLastPage: {
        state.demo.pop();
        state.demo.push(demoViews[0]);
        store.set(DEMO_NAVIGATION, state.demo);
        break;
      }
      case hasTwoItemsInArray: {
        state.demo.pop();
        const currentIndex = demoViews.findIndex(
          (item) => item.link === route.currentPath
        );
        state.demo.push(demoViews[currentIndex + 1]);
        store.set(DEMO_NAVIGATION, state.demo);
        break;
      }
      default: {
        const currentIndex = demoViews.findIndex(
          (item) => item.link === route.currentPath
        );
        state.demo.push(demoViews[currentIndex + 1]);
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
