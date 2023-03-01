const TokenKey = "token";
const menu = "MENU";

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}

export function getMenu() {
  return JSON.parse(localStorage.getItem(menu));
}

export function setMenu(data) {
  return localStorage.setItem(menu, JSON.stringify(data));
}

export function removeMenu() {
  return localStorage.removeItem("menu");
}
