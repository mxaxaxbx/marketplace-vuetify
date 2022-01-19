import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1f396f',
        secondary: '#2aafd8',
        accent: '#3F51B5',
      },
    },
  }
});
