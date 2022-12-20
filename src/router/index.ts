// @ts-ignore
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
//定义路由
const routes: Array<RouteRecordRaw> = [
  { 
    path: "/", 
    component: () => import("../views/Login.vue") },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      { 
        path: "/userList", 
        component: () => import("../views/UserList.vue") 
      },
    ],
  },
  { 
    path: "/userReg", 
    component: () => import("../views/Register.vue") 
  },
]
//导入路由，使用history模式
export default createRouter({
     history: createWebHashHistory(), 
     routes 
});
