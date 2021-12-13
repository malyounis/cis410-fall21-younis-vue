import { createStore } from "vuex";
import axios from "axios";

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
  },
  actions: {
    getPhones({ commit }) {
      axios.get("/product").then((aResponse) => {
        console.log(aResponse);
        commit("storePhones", aResponse.data);
      });
    },
  },
});
