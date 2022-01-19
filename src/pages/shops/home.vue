<template>
  <div>
    <!-- breadcrum -->
    <v-card class="bg-orange-200 border-orange-200">
      <v-card-title class="text-orange-500">
        Shops
      </v-card-title>
      <v-card-text>
        <v-icon small>mdi-home</v-icon> | 
        <router-link to="/">Home</router-link> | 
        <span>shops</span>
      </v-card-text>
    </v-card>

    <div class="mt-10 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
      <v-card
        v-for="shop of shops"
        :key="shop.id"
        :to="'/shops/' + shop.id"
        class="m-2 p-4 cursor-pointer hover:border-orange-500"
      >
        <div class="flex space-x-8">
          <v-img :src="shop.image_url" class="mt-10 w-12 h-12"></v-img>
          <div>
            <v-card-title> {{ shop.name }} </v-card-title>
            <v-card-text>
              <p v-for="(item, index) of shop.categories" :key="index">
                <v-icon x-small color="orange">mdi-check</v-icon>
                {{ item }}
              </p>
            </v-card-text>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue       from 'vue';
import Component from 'vue-class-component';

@Component
export default class ShopsIndex extends Vue {
  // shops getter
  get shops() { return this.$store.state.shops.shops; }

}
</script>
