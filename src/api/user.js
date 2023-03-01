import { get } from "@/utils/request";

export function userLogin(params) {
  return get("/user/login", params);
}

export function userLogon(params) {
  return get("/user/signUp", params);
}

export function get_user(params) {
  return get("/user/userList", params);
}
export function del_user(params) {
  return get("/user/removeUserById", params);
}
export function edit_user(params) {
  return get("/user/update", params);
}
export function add_user(params) {
  return get("/user/signUp", params);
}
