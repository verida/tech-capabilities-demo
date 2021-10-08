import { IViewState } from "@/interface";

export const demoViews = [
  {
    name: "Connect",
    link: "/connect",
  },
  {
    name: "Store Schemaless Data",
    link: "/schemaless-data",
  },
  {
    name: "Send Message",
    link: "/send-message",
  },
  {
    name: "Store Data",
    link: "/store-data",
  },
  {
    name: "Request Data",
    link: "/request-data-respond",
  },
  {
    name: "Share Data",
    link: "/share-data",
  },
];

export const exploreViewState: IViewState = {
  demos: {
    prev: demoViews[0],
    next: demoViews[1],
  },
};

export type ExploreViewState = typeof exploreViewState;
