import { Module } from "vuex";
// interfaces
import { ShopsI }     from "../interfaces/shops.interface";
import { RootStateI } from "../interfaces/types.interface";
// store moudules
import { actions }   from "./actions";
import { getters }   from "./getters";
import { mutations } from "./mutations";
import { state }     from "./state";

export const shops: Module<ShopsI, RootStateI> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}