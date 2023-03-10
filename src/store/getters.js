const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.userInfo?.username,
  menu: (state) => state.user.menu,
  userInfo: (state) => state.user.userInfo,
};
export default getters;
