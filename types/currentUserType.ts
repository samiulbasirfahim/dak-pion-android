export interface currentUserType {
  user?: {
    _id?: string;
    username?: string;
    email?: string;
    password?: string;
    isAvatarImageSet?: boolean;
    avatarImage?: string;
    __v?: any;
  };
  logOut: any;
  moveToAvatar: any;
}
