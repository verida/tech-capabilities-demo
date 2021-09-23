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
