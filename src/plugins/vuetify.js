import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#254259',
        secondary: '#424242',
      },
      dark: {
        primary: '#254259',
        secondary: '#424242',
      },
    },
  },
})
