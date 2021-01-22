<template>
  <v-container>
    <h1 class="text-center">Rechercher un contribuable</h1>
    <v-row class="mt-5">
      <v-col cols="4">
        <v-autocomplete
          :outlined="spiSearch && entry !== ''"
          placeholder="Veuillez entrer un nom de famille ou un SPI"
          cols="3"
          hide-no-data
          @keypress="startType($event)"
          :items="spiSearch ? filteredAutoCompleteItems : []"
          v-model="entry"
          append-icon="mdi-magnifier"
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="12">
        <v-data-table
          v-if="spiSearch === true"
          :headers="filteredHeaderBySPI"
          :items="filteredItemsBySPI"
          :class="tableClass"
        ></v-data-table>
        <v-data-table
          v-if="spiSearch === false"
          :headers="filteredHeaderByName"
          :items="filteredItemsByName"
          :class="tableClass"
        ></v-data-table>
        <v-data-table
          v-if="spiSearch === null"
          :headers="itemsHeaders"
          :items="$store.state.mock"
          :class="tableClass"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      //Gestion de la barre de recherche
      entry: "",
      spiSearch: null,
      mode: {
        name: {
          label: "Recherche de Nom",
        },
        spi: {
          label: `Recherche d'un SPI`,
        },
      },

      //Gestion du tableau
      itemsHeaders: [
        {
          text: "SPI",
          value: "spi",
        },
        {
          text: "Nom",
          value: "lastName",
        },
        {
          text: "Prénom",
          value: "firstName",
        },
        {
          text: "Situation",
          value: "situation",
        },
        {
          text: "Adresse",
          value: "adress",
        },
      ],
      tableClass: "mx-auto",
    };
  },
  methods: {
    startType(e) {
      if (this.entry === "") {
        if (!isNaN(e.key)) {
          this.spiSearch = true;
        } else {
          this.spiSearch = false;
        }
      }
    },
  },
  watch: {
    entry() {
      if (this.entry === "") this.spiSearch = null;
    },
  },
  computed: {
    filteredAutoCompleteItems() {
      let buffer = [];
      this.$store.state.mock.forEach((user) => buffer.push(user.spi));
      return buffer;
    },
    filteredHeaderByName() {
      return this.itemsHeaders.filter(
        (header) => header.text == "SPI" || header.text == "Situation"
      );
    },
    filteredHeaderBySPI() {
      return this.itemsHeaders.filter(
        (header) => header.text == "Nom" || header.text == "Prénom"
      );
    },
    filteredItemsBySPI() {
      return this.$store.state.mock.filter((user) =>
        user.spi.toString().startsWith(this.entry)
      );
    },
    filteredItemsByName() {
      return this.$store.state.mock.filter((user) =>
        user.lastName.toString().startsWith(this.entry)
      );
    },
  },
};
</script>

<style>
</style>