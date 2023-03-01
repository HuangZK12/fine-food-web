import { get } from "@/utils/request";

export function get_message(params) {
  return get("/message/msgList", params);
}
export function del_message(params) {
  return get("/message/delMsgById", params);
}
export function edit_message(params) {
  return get("/message/respMsg", params);
}
export function add_message(params) {
  return get("/message/addMsg", params);
}
