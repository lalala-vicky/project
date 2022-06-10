import requests from "./request";
const api = {
  login: "/api/login",
  updatePwd: "/my/updatepwd",
  userinfo: "/my/userinfo",
  payinfo: "/pay/payinfo",
  usermanage: "/manage/usermanage",
  getUserInfo: "/stuinfo/getUserInfo",
  getstuinfo: "/stuinfo/getstuinfo",
  addstuinfo: "/stuinfo/addstuinfo",
  deletastuinfo: "/stuinfo/deletastuinfo",
  updatastuinfo: "/stuinfo/updatastuinfo",
  getcourseinfo: "/courseinfo/getcourseinfo",
  addcourseinfo: "/courseinfo/addcourseinfo",
  deletacourseinfo: "/courseinfo/deletacourseinfo",
  updatacourseinfo: "/courseinfo/updatacourseinfo",
};
export const login = (params) => {
  return requests({ url: api.login, method: "post", data: params });
};
export const updatePwd = (params) => {
  return requests({ url: api.updatePwd, method: "post", data: params });
};
export const userinfo = (params) => {
  return requests({ url: api.userinfo, method: "post", data: params });
};
export const payinfo = (params) => {
  return requests({ url: api.payinfo, method: "post", data: params });
};
export const usermanage = (params) => {
  return requests({ url: api.usermanage, method: "post", data: params });
};
export const getUserInfo = (params) => {
  return requests({ url: api.getUserInfo, method: "post", data: params });
};
export const getstuinfo = (params) => {
  return requests({ url: api.getstuinfo, method: "post", data: params });
};
export const addstuinfo = (params) => {
  return requests({ url: api.addstuinfo, method: "post", data: params });
};
export const deletastuinfo = (params) => {
  return requests({ url: api.deletastuinfo, method: "post", data: params });
};
export const updatastuinfo = (params) => {
  return requests({ url: api.updatastuinfo, method: "post", data: params });
};
export const getcourseinfo = (params) => {
  return requests({ url: api.getcourseinfo, method: "post", data: params });
};
export const addcourseinfo = (params) => {
  return requests({ url: api.addcourseinfo, method: "post", data: params });
};
export const deletacourseinfo = (params) => {
  return requests({ url: api.deletacourseinfo, method: "post", data: params });
};
export const updatacourseinfo = (params) => {
  return requests({ url: api.updatacourseinfo, method: "post", data: params });
};
