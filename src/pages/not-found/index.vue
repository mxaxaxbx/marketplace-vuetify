<template>
  <div class="bg-gray-100 p-20 flex justify-center">
    <div class="text-center">
      <h1 class="text-h1"> Not found </h1>
      <h2 class="text-h2 font-bold primary--text"> 404 </h2><br/>
      <p class="text-gray-600">
        It seems we can't find what you're looking for. Go back to <router-link to="/" class="font-bold"> Homepage </router-link>
      </p>

      <v-form class="mt-7">
        <v-text-field
          :label="$t('search') | capitalize"
          v-model="search"
          solo
          clearable
          role="search"
          append-icon="mdi-magnify"
          @click:append="searchTerm"
          class=""
          autofocus
          required
        ></v-text-field>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { AppMutations } from '@/store/mutations';

@Component
export default class NotFound extends Vue {
  // getter and setter for search
  get search(): string { return this.$store.state.query; }
  set search(val: string) { this.$store.commit(AppMutations.SET_QUERY, val); }

  searchTerm(e: Event) {
    console.log(e);
  }
}

</script>
