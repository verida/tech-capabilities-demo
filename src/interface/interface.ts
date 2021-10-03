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

export type TDemos = {
  prev: TLinks | undefined;
  next: TLinks | undefined;
};

export interface IViewState {
  demos: TDemos;
}

export interface IRoute<T> {
  currentPath: T;
  prevPath: T;
}
