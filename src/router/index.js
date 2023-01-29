import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/pages/Home.vue";
import NotificationsVue from "@/pages/Notifications.vue";
import MessagesVue from "@/pages/Messages.vue";
import ProfileVue from "@/pages/Profile.vue";
import LoginVue from "@/pages/Login.vue";
import RegisterVue from "@/pages/Register.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue,
    title: "홈",
    icon: "fas fa-home fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/",
    name: "explore",
    component: HomeVue,
    title: "탐색하기",
    icon: "fas fa-hashtag fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/notifications",
    name: "notificationsVue",
    component: NotificationsVue,
    title: "알림",
    icon: "far fa-bell fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/messages",
    name: "messages",
    component: MessagesVue,
    title: "쪽지",
    icon: "far fa-envelope fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/",
    name: "bookmarks",
    component: HomeVue,
    title: "북마크",
    icon: "far fa-bookmark fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/",
    name: "list",
    component: HomeVue,
    title: "리스트",
    icon: "far fa-list-alt fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileVue,
    title: "프로필",
    icon: "far fa-user fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/profile/:uid",
    component: ProfileVue,
    meta: { isMenu: false, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/",
    name: "more",
    component: HomeVue,
    title: "더보기",
    icon: "fas fa-ellipsis-h fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  // {
  //   path: "/tweet/:id",
  //   name: "tweet",
  //   component: TweetVue,
  //   meta: { isMenu: false, layout: "DefaultLayout", requireAuth: true },
  // },
  {
    path: "/register",
    name: "register",
    component: RegisterVue,
    meta: { isMenu: false, layout: "EmptyLayout" },
  },
  {
    path: "/login",
    name: "login",
    component: LoginVue,
    meta: { isMenu: false, layout: "EmptyLayout" },
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
