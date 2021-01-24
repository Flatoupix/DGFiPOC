<template>
  <v-app>
    <header-item :height="90"></header-item>
    <v-divider></v-divider>

    <cont-search></cont-search>
  </v-app>
</template>

<script>
import contSearch from './components/contSearch'
import headerItem from './components/headerItem'

export default {
  name: 'App',

  components: {
    contSearch,
    headerItem,
  },

  data: () => ({
    //
  }),
}
</script>
