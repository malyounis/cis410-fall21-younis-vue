import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

export default createStore({
  state: {
    token: null,
    user: null,
    phones: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storePhones(state, phones) {
      state.phones = phones;
    },
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getPhones({ commit }) {
      axios.get("/product").then((aResponse) => {
        console.log(aResponse);
        commit("storePhones", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/contact/logout", null, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log();
        });
    },
  },
});
