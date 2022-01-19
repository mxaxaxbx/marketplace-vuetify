<template>
  <v-footer :padless="padless" >
    <v-card flat tile width="100%" class="grey lighten-4 pb-20 pt-10">
      <div class="grid lg:grid-cols-5 xs:grid-cols-3">
        <div class="lg:col-span-2 xs:col-span-3">
          <v-card-title> contact us </v-card-title>

          <v-card-text>
            <p> Call us 24/7 </p>
            <p class="primary--text text-h5"> 01800-000000 </p>
            <div>Bogotá - Colombia</div>
            <a href="mailto:mxaxaxbx@gmail.com" class="black--text">
              mxaxaxbx@gmail.com
            </a>

            <div class="flex space-x-4 mt-5">
              <v-btn
                v-for="social of socialLinks"
                :key="social.id"
                :href="social.url"
                target="_blank"
                icon
                :color="social.color"
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </div>
          </v-card-text>

        </div>

        <div class="lg:col-span-1">
          <v-card-title> quick links </v-card-title>

          <v-card-text>
            <router-link to="/policy" class="black--text"> Privacy Policy </router-link> <br/>
            <router-link to="/terms" class="black--text"> Terms & Conditions </router-link> <br/>
            <router-link to="/shipping" class="black--text"> Shipping & Delivery </router-link> <br/>
            <router-link to="/returns" class="black--text"> Returns & Refunds </router-link> <br/>
            <router-link to="/faqs" class="black--text"> FAQs </router-link> <br/>
          </v-card-text>
        </div>

        <div class="lg:col-span-1">
          <v-card-title> Company </v-card-title>

          <v-card-text>
            <router-link to="/about" class="black--text"> About Us </router-link> <br/>
            <router-link to="/affiliate" class="black--text"> Affiliate Program </router-link> <br/>
            <router-link to="/contact" class="black--text"> Contact Us </router-link> <br/>
          </v-card-text>
        </div>

        <div class="lg:col-span-1">
          <v-card-title> Business </v-card-title>

          <v-card-text>
            <router-link to="/press" class="black--text"> Press </router-link> <br/>
            <router-link to="/checkout" class="black--text"> Checkout </router-link> <br/>
            <router-link to="/account" class="black--text"> Account </router-link> <br/>
          </v-card-text>
        </div>
      </div>

      <v-divider></v-divider>

      <div class="flex justify-between mt-5 p-5">
        <p> &copy; {{ year }} Marketplace. All rights reserved. </p>

        <div>
          We using safe payment for:
          <!-- card icons -->
          <!-- pse icon -->
        </div>
      </div>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { SocialLinkI } from '@/store/interfaces/types.interface';
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class TheFooter extends Vue {
  padless = true;

  // social links getter
  get socialLinks(): SocialLinkI[] {
    return this.$store.state.socialLinks;
  }

  // year getter
  get year(): number {
    return new Date().getFullYear();
  }
}
</script>
