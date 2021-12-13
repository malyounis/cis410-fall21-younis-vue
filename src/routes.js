import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import PhoneDetail from "./components/PhoneDetail.vue";
import Phones from "./components/Phones.vue";
import NotFound from "./components/NotFound.vue";
import PreferenceCreate from "./components/PreferenceCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import myStore from "./store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/account",
      component: Account,
      beforeEnter(to, from, next) {
        if (myStore.state.token) {
          next();
        } else {
          next("/login");
        }
      },
    },
    { path: "/login", component: Login },
    { path: "/phones", component: Phones },
    {
      path: "/phones/:pk",
      component: PhoneDetail,
      children: [{ path: "preference", component: PreferenceCreate }],
    },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;
