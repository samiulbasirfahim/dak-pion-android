export const host = 'https://server-of-chat-app-production.up.railway.app';
//  export const host = "http://localhost:5000"

export const loginRoute = `${host}/users/login`;
export const registerRoute = `${host}/users/register`;
export const logoutRoute = `${host}/users/logout`;
export const allUsersRoute = `${host}/users/allusers`;
export const sendMessageRoute = `${host}/messages/addmsg`;
export const recieveMessageRoute = `${host}/messages/getmsg`;
export const setAvatarRoute = `${host}/users/setavatar`;

// console.log(process.env.REACT_APP_HOST)
