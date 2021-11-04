export interface ProfileDocument {
  _id: string;
  _rev?: string;
  key: string;
  value?: unknown;
}

export interface ErrorMessages {
  message: string;
  type: string;
}

export interface ProfileDetails {
  name: string;
  country: string;
  avatar: string;
}

export type TLinks = {
  name: string;
  link: string;
};

export interface IViewState {
  demo: any;
}

export interface IRouteStore<T> {
  currentPath: T;
  prevPath: T;
}
