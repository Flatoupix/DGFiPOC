<template>
  <v-row class="my-2 flex-grow-0">
    <v-col cols="3">
      <v-img src="../assets/ministere.jpg" position="left" contain class="ml-8" :height="height"></v-img>
    </v-col>
    <v-col cols="6">
      <v-img src="../assets/DGFP.jpg" contain :height="height"></v-img>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="3" class="d-flex align-self-center justify-center"
      ><v-switch color="primary" label="Mode sombre" v-model="$vuetify.theme.dark"></v-switch
    ></v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: () => 0,
    },
  },
}
</script>
