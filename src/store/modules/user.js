import { userLogin, logout, getInfo, userLogon } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { ElMessage } from "element-plus";
import { get_menu } from "../../api/menu";
import { getMenu, setMenu } from "../../utils/auth";
// import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avatar: "",
    menu: getMenu() || [],
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.userInfo = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
    localStorage.setItem("username", name);
  },
  SET_MENU: (state, menu) => {
    state.menu = menu;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  },
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      userLogin({ username: username.trim(), password: password })
        .then(async (data) => {
          ElMessage.success("登录成功");
          commit("SET_TOKEN", data.id);
          commit("SET_USER_INFO", data);
          console.log('--data>>',data);
          setToken(data.id);
          const menu = await get_menu({ userId: data.id });
          commit("SET_MENU", menu);
          setMenu(menu);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  logon({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      userLogon({ username: username.trim(), password: password })
        .then((response) => {
          ElMessage.success("注册成功");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then((response) => {
          const { data } = response;

          if (!data) {
            return reject(
              new Error("Verification failed, please Login again.")
            );
          }

          const { name, avatar } = data;

          commit("SET_NAME", name);
          commit("SET_AVATAR", avatar);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          removeToken(); // must remove  token  first
          // resetRouter()
          commit("RESET_STATE");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
