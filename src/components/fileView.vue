<template>
  <v-card v-if="profile !== null" max-width="400">
    <v-row class="ma-2">
      <v-col cols="10"><h2>Profile</h2></v-col>
      <v-col cols="2"><v-icon @click="$emit('closeAction', '')">mdi-close</v-icon></v-col>
    </v-row>
    <div class="mb-5">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>Nom</v-list-item-subtitle>
          <v-list-item-title>{{ profile.lastName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>Prénom</v-list-item-subtitle>
          <v-list-item-title>{{ profile.firstName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>SPI</v-list-item-subtitle>
          <v-list-item-title>{{ profile.spi }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>Adresse</v-list-item-subtitle>
          <v-list-item-title>{{ profile.adress }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>Situation</v-list-item-subtitle>
          <v-list-item-title>{{ profile.situation }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    profile: {
      type: Object,
      default: () => null,
    },
  },
}
</script>