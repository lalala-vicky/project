import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import login from "@/views/login/login.vue";
import NotFound from "@/views/error/404.vue";
import register from "../views/login/register.vue";

Vue.use(VueRouter);

// 获取原型对象的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: "/",
    redirect: "/login",
    component: HomeView,
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/students",
        name: "students",
        component: () => import("../views/home/studentsInfo/students.vue"),
      },
      {
        path: "/info",
        name: "info",
        component: () => import("../views/home/info.vue"),
      },
      {
        path: "/payment",
        name: "payment",
        component: () => import("../views/home/payment.vue"),
      },
      {
        path: "/book",
        name: "book",
        component: () => import("../views/home/book.vue"),
      },
      {
        path: "/system",
        name: "system",
        component: () => import("../views/home/system.vue"),
      },
    ],
  },
  {
    path: "/msg",
    component: HomeView,
    redirect: "/engineer",
    children: [
      {
        path: "/engineer",
        name: "engineer",
        component: () => import("../views/home/studentsMsg/engineer.vue"),
      },
      {
        path: "account",
        name: "account",
        component: () => import("../views/home/studentsMsg/account.vue"),
      },
      {
        path: "economy",
        name: "economy",
        component: () => import("../views/home/studentsMsg/economy.vue"),
      },
      {
        path: "art",
        name: "art",
        component: () => import("../views/home/studentsMsg/art.vue"),
      },
      {
        path: "medicine",
        name: "medicine",
        component: () => import("../views/home/studentsMsg/medicine.vue"),
      },
      {
        path: "foreign",
        name: "foreign",
        component: () => import("../views/home/studentsMsg/foreign.vue"),
      },
    ],
  },
  // 登录
  {
    path: "/login",
    name: "login",
    component: login,
  },
  // 注册
  {
    path: "/register",
    name: "register",
    component: register,
  },
  // 404
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
