<template>
  <div>
    <!-- breadcrum -->
    <v-card class="bg-orange-200 border-orange-200">
      <v-card-title class="text-orange-500">
        Categories
      </v-card-title>
      <v-card-text>
        <v-icon small>mdi-home</v-icon> | 
        <router-link to="/">Home</router-link> | 
        <span>categories</span>
      </v-card-text>
    </v-card>
    
    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 mt-10">
      <v-card
        v-for="categorie in categories"
        :key="categorie.id"
        :to="'/categorie/' + categorie.id"
        class="mx-1 my-1 cursor-pointer hover:border-orange-500"
      >
        <v-img height="250" :src="categorie.image_url"></v-img>

        <v-card-title>{{ categorie.name }}</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue       from 'vue';
import Component from 'vue-class-component';

@Component
export default class CategoriesHome extends Vue {
  // categories getter
  get categories() { return this.$store.state.categories.categories; }

}
</script>
