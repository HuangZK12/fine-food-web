import { get } from "@/utils/request";

export function get_bill(params) {
  return get("/bill/billList", params);
}
export function del_bill(params) {
  return get("/bill/delbillById", params);
}
export function edit_bill(params) {
  return get("/bill/update", params);
}
export function add_bill(params) {
  return get("/bill/sendBill", params);
}
