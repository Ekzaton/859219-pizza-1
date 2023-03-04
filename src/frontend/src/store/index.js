import Vue from "vue";
import Vuex from "vuex";

import VuexPlugins from "../plugins/vuex";

import Auth from "./modules/auth";
import Builder from "./modules/builder";
import Cart from "./modules/cart";
import Orders from "./modules/orders";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {
    init({ dispatch }) {
      dispatch("Builder/fetchSourceDough");
      dispatch("Builder/fetchSourceIngredients");
      dispatch("Builder/fetchSourceSauces");
      dispatch("Builder/fetchSourceSizes");
      dispatch("Cart/fetchSourceAdditions");
    },
  },
  modules: {
    Auth,
    Builder,
    Cart,
    Orders,
  },
  plugins: [VuexPlugins],
});
