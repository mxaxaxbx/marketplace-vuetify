import Vue from "vue";

// capitalize text filter
Vue.filter("capitalize", function(value: string) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
// local price filter
Vue.filter("price", function(value: number) {
  if (!value) return "";
  return value.toLocaleString("es-es", {
    style: "currency",
    currency: "COP",
  });
});
