import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
// interfaces
import { RootStateI } from "./interfaces/types.interface";
// local app config
import { actions }   from "./actions";
import { getters }   from "./getters";
import { mutations } from "./mutations";
import { state }     from "./state";
// modules
import { products } from "./products";
import { shops }    from "./shops";
import { categories }    from "./categories";

Vue.use(Vuex);

const store : StoreOptions<RootStateI> = {
  actions,
  getters,
  mutations,
  state,
  modules : {
    products,
    shops,
    categories,
  }
};

export default new Vuex.Store<RootStateI>(store);
