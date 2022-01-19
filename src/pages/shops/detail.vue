<template>
  <div class="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 xs:grid-cols-1">
    <v-card class=" h-full">
      <v-card-text>
        <router-link to="/shops">
          <!-- back icon -->
          <v-icon small>mdi-arrow-left</v-icon>
          Shops
        </router-link>
      </v-card-text>

      <v-card-text class="grid place-content-center">
        <v-img :lazy-src="shop.image_url" class="rounded-full w-16 h-16"></v-img>
      </v-card-text>

      <v-card-title class="justify-center">
        <h1 >{{ shop.name }}</h1>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-list dense>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <!-- hours icon -->
                  <v-icon small>mdi-clock-outline</v-icon>
                  Available hours
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
    <!-- listado de productos -->
    <div class="px-5 py-10 col-span-4 border">
      <h5 class="text-h5">Listado de productos</h5>

      <!-- card product -->
      <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 mt-10">
        <v-card
          v-for="prod in products"
          :key="prod.id"
          :to="'/products/' + prod.id"
          class="mx-1 my-1 cursor-pointer hover:border-orange-500"
        >
          <v-img height="250" :src="prod.image_url"></v-img>

          <v-card-title>{{ prod.name }}</v-card-title>

          <v-divider></v-divider>
            
          <v-card-text>
            <div class="items-center">
              <div class="text-subtitle-1 green--text">
                <b>$ {{ prod.discount_price | price }}</b>
              </div>

              <div class="red--text line-through">
                $ {{ prod.price | price }}
              </div>

              <div class="red--text">
                {{ prod.discount_percentage }} %
              </div>
            </div>
          </v-card-text>
            
          <v-divider class="mx-4"></v-divider>

          <v-card-actions class="flex justify-end">
            <v-btn color="primary lighten-2" text>
              <v-icon>mdi-cart-plus</v-icon>
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue       from 'vue';
import Component from 'vue-class-component';

@Component
export default class ShopDetail extends Vue {
  // shop getter
  get shop() { return this.$store.state.shops.shop; }

  // products getter
  get products() { return this.$store.state.products.products; }

}
</script>
