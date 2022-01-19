import { Module } from "vuex";
import { CategoriesI } from "../interfaces/categories.interface";
// interfaces
import { RootStateI } from "../interfaces/types.interface";
// store moudules
import { actions }   from "./actions";
import { getters }   from "./getters";
import { mutations } from "./mutations";
import { state }     from "./state";

export const categories: Module<CategoriesI, RootStateI> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}