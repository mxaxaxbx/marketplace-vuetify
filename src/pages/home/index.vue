<template>
  <div>
    <v-carousel v-model="model" cycle>
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <charctaristics-cards class="mt-10"></charctaristics-cards>

    <promotions class="mt-10 p-5"></promotions>

    <subscripe-panel class="mt-10"></subscripe-panel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
// components
import CharctaristicsCards from './characteristics-cards.vue';
import Promotions          from './promotions.vue';
import SubscripePanel      from './subscribe-panel.vue';

@Component({
  name: 'App',
  components: {
    CharctaristicsCards,
    Promotions,
    SubscripePanel,
  },
})
export default class App extends Vue {

  model = 0;
  colors: string[] = [
    'primary',
    'secondary',
    'yellow darken-2',
    'red',
    'orange',
  ];

}
</script>
