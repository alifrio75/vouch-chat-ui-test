import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#A7862E',
        secondary: '#C3B588',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
