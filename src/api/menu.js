import { get } from "@/utils/request";

export function get_menu(params) {
  return get("/menu/getMenu", params);
}
export function del_menu(params) {
  return get("/menu/delMenuById", params);
}
export function edit_menu(params) {
  return get("/menu/update", params);
}
export function add_menu(params) {
  return get("/menu/addMenu", params);
}
