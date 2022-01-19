<template>
  <v-card color="grey lighten-4" class="lg:m-10 pt-20">
    <div class="grid lg:grid-cols-2">
      <div>
        <!-- image phone -->
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" aspect-ratio="1.5" contain></v-img>
      </div>

      <div class="">
        <!-- image phone -->
        <v-card-title> Download App </v-card-title>

        <v-card-subtitle>
          Shopping fastly and easily more with our app. Get a link to download the app on your phone
        </v-card-subtitle>
        
        <v-card-text>
          <!-- subscribe form -->
          <v-form ref="form">
            <v-text-field
              v-model="email"
              label="Email"
              outlined
              :rules="emailRules"
              type="email"
              append-icon="mdi-send"
              @click:append="subscribe"
              required
            ></v-text-field>
          </v-form>

          <!-- google play and app store badges -->
          <div class="flex space-x-10">
            <a href="https://play.google.com/" target="_blank">
              <v-img src="https://www.sitidoctor.com/wp-content/uploads/2020/09/play-store-min.png" alt="Get it on Google Play" width="120px" />
            </a>
            <a href="https://apps.apple.com/" target="_blank">
              <v-img src="https://www.sitidoctor.com/wp-content/uploads/2020/09/app-store-min.png" alt="Get it on the App Store" width="120px" />
            </a>
          </div>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'SubscribePanel',
})
export default class SubscribePanel extends Vue {
  email = '';
  emailRules = [
    (v: string) => !!v || 'Email is required',
    (v: string) => /.+@.+/.test(v) || 'Email must be valid',
  ];
  form = false;

  subscribe() {
    this.$store.dispatch('subscribe', this.email);
  }
}


</script>
