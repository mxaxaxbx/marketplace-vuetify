<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="xl:w-64 lg:w-80 sm:w-80 md:w-80">
        <h4 class="text-h4"> Deal of the day </h4>
      </div>

      <div class="w-3/4">
        <v-sheet color="red" class="w-64 py-2 px-5 rounded w-56 white--text font-bold">
          End in:
          {{ time }}
        </v-sheet>
      </div>

      <router-link to="/promotions" class="w-24 underline">View all</router-link>
    </div>

    <v-divider class="my-5"></v-divider>

    <v-sheet class="mx-auto" >
      <v-slide-group show-arrows>
        <v-slide-item v-for="prod in products" :key="prod.id" v-slot="{ active, toggle }">
          <v-card :input-value="active" @click="toggle" class="mx-5" width="250">
            <v-img height="250" :src="prod.image_url"></v-img>

            <v-card-title>{{ prod.store_name }}</v-card-title>

            <v-divider></v-divider>
            
            <v-card-text>
              <div class="flex space-x-4 items-center">
                <div class="text-subtitle-1 green--text">
                  <b>{{ prod.price }}</b>
                </div>

                <div class=" red--text line-through">
                  {{ prod.discount_price }}
                </div>

                <div class=" red--text ">
                  {{ prod.discount_percentage }}
                </div>
              </div>

              <router-link :to="`/product/${ prod.id }`" class="text-sm"> {{ prod.name }} </router-link>
            </v-card-text>
            
            <v-divider class="mx-4"></v-divider>

            <v-card-actions class="flex justify-end">
              <v-btn color="primary lighten-2" text>
                <v-icon>mdi-cart-plus</v-icon>
                Add to cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { ProductI } from '@/store/interfaces/products.interface';

Component.registerHooks([
  'created',
]);

@Component({
  name: 'Promotions',
})
export default class Promotions extends Vue {
  secondsRemaining: any = 0;
  intervalHandle : any;
  time: string | number = '0:00';

  // products list
  get products(): ProductI { return this.$store.state.products.promotions; }

  tick() {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec: string | number = this.secondsRemaining - (min * 60);

    if( sec < 10 ) sec = '0' + sec;

    const message = min.toString() + ':' + sec.toString();

    this.time = message;

    if( this.secondsRemaining === 0 ) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }

  startCountdown() {
    const minutes = 60;
    
    this.secondsRemaining = minutes * 60;
    this.intervalHandle = setInterval(this.tick, 1000);
  }
  
  created() {
    this.startCountdown();
  }
}

</script>
