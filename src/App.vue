<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Sitidocotor
            </v-list-item-title>
            <v-list-item-subtitle class="text-caption">
              <router-link to="/">
                Marketplace
              </router-link>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        
        <v-divider></v-divider>

        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>
              <router-link to="/contact" class="black--text">
                {{ $t('sell here')  | capitalize }}
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link to="/tracking" class="black--text">
                {{ $t('track your order') | capitalize }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-content>
              <v-menu v-model="langsMenuMovil" :close-on-content-click="true" offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" v-bind="attrs" v-on="on">
                    <!-- arrow down icon -->
                    <v-icon class="mr-2">mdi-arrow-down</v-icon>
                    <country-flag :country="language.flag" size="small"></country-flag>
                    <span class="align-middle">{{ language.name }}</span>
                  </v-btn>
                </template>

                <v-card>
                  <v-list>
                    <v-list-item
                      v-for="lang, index of languages"
                      :key="index"
                      @click="language = lang"
                      class="cursor-pointer hover:bg-gray-200"
                    >
                      <v-list-item-action>
                        <country-flag :country="lang.flag" size="normal"></country-flag>
                        </v-list-item-action>
                      <v-list-item-title>{{lang.name}} </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="md:block sm:block lg:block xl:hidden"
      />

      <div class="w-1/4">
        <v-app-bar-title>
          <router-link to="/home" class="white--text">
            Marketplace
          </router-link>
        </v-app-bar-title>
      </div>

      <v-form class="mt-7 w-1/2">
        <v-text-field
          :label="$t('search') | capitalize"
          v-model="search"
          solo-inverted
          clearable
          dense
          role="search"
          append-icon="mdi-magnify"
          @click:append="searchTerm"
          class="xs:hidden sm:hidden md:hidden lg:hidden xl:block"
        ></v-text-field>
      </v-form>

      <div class="w-1/4 d-flex justify-end">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </template>
          <span> {{ $t('cart') | capitalize }} </span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar v-bind="attrs" v-on="on">
              <v-icon dark>
                mdi-account-circle
              </v-icon>
            </v-avatar>
          </template>
          <span> {{ $t('account') | capitalize }}</span>
        </v-tooltip>

        <div class="pr-5 xs:hidden sm:hidden md:hidden lg:hidden xl:block">
          <router-link to="/auth/login" class="white--text">{{ $t('login') | capitalize }}</router-link><br/>
          <router-link to="/auth/login" class="white--text">{{ $t('register') | capitalize }}</router-link>
        </div> 
      </div>

      <template v-if="showMenuOptions && isDesktop" v-slot:extension class="md:hidden sm:hidden lg:hidden xl:block">
        <div class="flex justify-between w-full">
          <!-- stores dropdown -->
          <div class="w-1/4">
            <v-menu v-model="shopsMenu" open-on-hover :close-on-content-click="true" :nudge-width="200" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="transparent" depressed v-bind="attrs" v-on="on" to="/shops">
                  <!-- shop icon -->
                  <v-icon>mdi-store</v-icon>
                  {{ $t('shops') | capitalize }}
                </v-btn>
              </template>

              <v-card>
                <v-list>
                  <v-list-item
                    v-for="shop of shops"
                    :key="shop.id"
                    class="cursor-pointer hover:bg-gray-200"
                    :to="'/shops/' + shop.id"
                  >
                    <v-list-item-title>{{ shop.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          </div> 
          <!-- categories dropdown -->
          <div class="w-1/3 ">
            <v-menu v-model="catsMenu" open-on-hover :close-on-content-click="false" :nudge-width="200" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="transparent" depressed v-bind="attrs" v-on="on" to="/categories">
                  {{ $t('categories') | capitalize }}
                  <!-- arrow down icon -->
                  <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-list>
                  <v-list-item class="cursor-pointer hover:bg-gray-200">
                    <v-list-item-title>bebes </v-list-item-title>
                  </v-list-item>

                  <v-list-item class="cursor-pointer hover:bg-gray-200">
                    <v-list-item-title>cuidado </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          </div>
          <!-- app options -->
          <div class="w-2/5 flex justify-end space-x-4 items-center">
            
            <router-link to="/contact" class="white--text">
              {{ $t('sell here')  | capitalize }}
            </router-link>
            <v-divider vertical></v-divider>
            
            <router-link to="/tracking" class="white--text">
              {{ $t('track your order') | capitalize }}
            </router-link>
            <v-divider vertical></v-divider>

            <v-menu v-model="langsMenu" open-on-hover :close-on-content-click="false" :nudge-width="90" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="transparent" depressed v-bind="attrs" v-on="on">
                  <!-- arrow down icon -->
                  <v-icon class="mr-2">mdi-arrow-down</v-icon>
                  <country-flag :country="language.flag" size="small"></country-flag>
                  <span class="align-middle">{{ language.name }}</span>
                </v-btn>
              </template>

              <v-card>
                <v-list>
                  <v-list-item
                    v-for="lang, index of languages"
                    :key="index"
                    @click="language = lang"
                    class="cursor-pointer hover:bg-gray-200"
                  >
                    <v-list-item-action>
                      <country-flag :country="lang.flag" size="normal"></country-flag>
                      </v-list-item-action>
                    <v-list-item-title>{{lang.name}} </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          
          </div>
        </div>
      </template>
    </v-app-bar>

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>

    <the-footer class="mt-20"></the-footer>

    <v-bottom-navigation fixed class="md:flex sm:flex lg:flex xl:hidden">
      <v-btn to="/shops">
        <span> {{ $t('shops') | capitalize }} </span>
        <v-icon>mdi-shopping</v-icon>
      </v-btn>

      <v-btn to="/categories">
        <span> {{ $t('categories') | capitalize }} </span>
        <v-icon>mdi-shape</v-icon>
      </v-btn>

      <v-btn to="/search">
        <span> {{ $t('search') | capitalize }} </span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn to="/cart">
        <span> {{ $t('cart') | capitalize }} </span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CountryFlag from 'vue-country-flag';

import { LanguageI } from './store/interfaces/types.interface';

import { AppMutations } from './store/mutations';

import TheFooter from './components/app/the-footer.vue';

Component.registerHooks([
  'created',
  'destroyed',
]);

@Component({
  name: 'App',
  components: {
    CountryFlag,
    TheFooter,
  },
})
export default class App extends Vue {

  shopsMenu       = false;
  catsMenu        = false;
  langsMenu       = false;
  langsMenuMovil  = false;
  showMenuOptions = true;
  scrollPosition  = 0;
  drawer          = false;
  group           = null;
  isDesktop       = false;

  // getter and setter for search
  get search(): string { return this.$store.state.query; }
  set search(val: string) { this.$store.commit(AppMutations.SET_QUERY, val); }
  // getter and setter for language
  get language(): LanguageI { return this.$store.state.language; }
  set language(val: LanguageI) {
    // change app language
    this.$i18n.locale = val.code;
    this.$store.commit(AppMutations.SET_LANG, val);
  }
  // getter of languages list
  get languages(): LanguageI[] { return this.$store.state.languages; }
  // shops getter
  get shops() { return this.$store.state.shops.shops; }

  searchTerm(e: Event) {
    console.log(e);
  }

  created() {
    this.getScrollPosition();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.checkDesktop);
    this.checkDesktop();
  }

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private getScrollPosition() {
    this.scrollPosition = document.scrollingElement?.scrollTop || 0;
  }

  private handleScroll(e: Event) {
    const currentScrollPosition = document.scrollingElement?.scrollTop || 0;

    if(currentScrollPosition < this.scrollPosition) this.showMenuOptions = true;
    else this.showMenuOptions = false;

    setTimeout(() => {
      this.scrollPosition = currentScrollPosition;
    }, 100);
  }

  private checkDesktop() {
    const isDesktop = window.innerWidth > Number( process.env.VUE_APP_UI_SCREENS_LG );
    this.isDesktop = isDesktop;
    // hide the sidebar of main menu on desktop
    if(isDesktop) {      
      setTimeout(() => {
        this.drawer = false;
      }, 500);
    }
  }

}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
