import { LanguageI, RootStateI } from "./interfaces/types.interface";

export enum AppMutations {
  SET_QUERY = "SET_QUERY",
  SET_LANG = "SET_LANG",
}

export const mutations = {
  [AppMutations.SET_QUERY](state: RootStateI, query: string): void { state.query = query; },
  [AppMutations.SET_LANG](state: RootStateI, lang: LanguageI): void { state.language = lang; },
}
