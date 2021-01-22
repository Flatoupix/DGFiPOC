<template>
  <v-app>
    <cont-search></cont-search>
  </v-app>
</template>

<script>
import contSearch from "./views/contSearch";

export default {
  name: "App",

  components: {
    contSearch,
  },

  data: () => ({
    //
  }),
};
</script>
