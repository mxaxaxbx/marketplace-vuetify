import { Module } from "vuex";
// interfaces
import { ProductsI }  from "../interfaces/products.interface";
import { RootStateI } from "../interfaces/types.interface";
// store moudules
import { actions }   from "./actions";
import { getters }   from "./getters";
import { mutations } from "./mutations";
import { state }     from "./state";

export const products: Module<ProductsI, RootStateI> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}