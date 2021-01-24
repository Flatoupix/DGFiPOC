<template>
  <v-container>
    <h1 class="text-center">Rechercher un contribuable</h1>
    <v-dialog
      v-model="dialog"
      scrollable
      persistent
      close-on-click
      :overlay="false"
      max-width="400"
      transition="dialog-transition"
    >
      <file-view :profile="currentRow" @closeAction="clearObj()"></file-view>
    </v-dialog>
    <v-row class="mt-5">
      <v-col cols="12" xs="8" sm="6" lg="4">
        <v-text-field
          :solo="spiSearch"
          placeholder="Veuillez entrer un nom de famille ou un SPI"
          cols="3"
          hide-no-data
          @keypress="startType($event)"
          :items="spiSearch ? filteredAutoCompleteItems : []"
          v-model="entry"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
        <v-autocomplete
          :solo="spiSearch"
          placeholder="Veuillez entrer un nom de famille ou un SPI"
          cols="3"
          hide-no-data
          @keypress="startType($event)"
          :items="$store.state.mock.map((user) => user.firstName)"
          v-model="entry"
          prepend-inner-icon="mdi-magnify"
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col>
        <v-data-table
          height="500"
          v-if="spiSearch === true"
          :headers="filteredHeaderBySPI"
          :items="filteredItemsBySPI"
          :class="tableClass"
          :no-data-text="noDataText"
          :no-results-text="noResultText"
          hide-default-footer
          fixed-header
          disable-pagination
        ></v-data-table>
        <v-data-table
          height="500"
          v-if="spiSearch === false"
          :headers="filteredHeaderByName"
          :items="filteredItemsByName"
          :class="tableClass"
          :no-data-text="noDataText"
          :no-results-text="noResultText"
          hide-default-footer
          fixed-header
          disable-pagination
        ></v-data-table>
        <v-data-table
          height="500"
          v-if="spiSearch === null"
          :headers="itemsHeaders"
          :items="$store.state.mock"
          :class="tableClass"
          :no-data-text="noDataText"
          :no-results-text="noResultText"
          hide-default-footer
          fixed-header
          disable-pagination
          @click:row="refreshRow($event)"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import fileView from './fileView'

export default {
  components: {
    fileView,
  },
  data() {
    return {
      //Gestion modale dialog
      dialog: false,

      //Gestion de la barre de recherche
      entry: '',
      spiSearch: null,
      mode: {
        name: {
          label: 'Recherche de Nom',
        },
        spi: {
          label: `Recherche d'un SPI`,
        },
      },

      //Gestion du tableau
      itemsHeaders: [
        {
          text: 'SPI',
          value: 'spi',
        },
        {
          text: 'Nom',
          value: 'lastName',
        },
        {
          text: 'Prénom',
          value: 'firstName',
        },
        {
          text: 'Situation',
          value: 'situation',
        },
        {
          text: 'Adresse',
          value: 'adress',
        },
      ],
      tableClass: 'mx-auto',
      noDataText: "Il n'y a aucune donnée à afficher.",
      noResultText: 'Désolé mais aucun résultat ne correspond à votre recherche.',
      currentRow: null,
    }
  },
  methods: {
    startType(e) {
      if (this.entry === '') {
        if (!isNaN(e.key)) {
          this.spiSearch = true
        } else {
          this.spiSearch = false
        }
      } else if (this.entry.length === 1) {
        if (e.key) {
          console.log(e.key)
        }
      }
    },
    refreshRow(e) {
      this.currentRow = e
      this.dialog = true
    },
    clearObj() {
      this.dialog = false
      this.currentRow = null
    },
  },
  watch: {
    entry() {
      if (this.entry === '') this.spiSearch = null
    },
  },
  computed: {
    filteredAutoCompleteItems() {
      let buffer = []
      this.$store.state.mock.forEach((user) => buffer.push(user.spi))
      return buffer
    },
    filteredHeaderByName() {
      return this.itemsHeaders.filter((header) => header.text == 'SPI' || header.text == 'Situation')
    },
    filteredHeaderBySPI() {
      return this.itemsHeaders.filter((header) => header.text == 'Nom' || header.text == 'Prénom')
    },
    filteredItemsBySPI() {
      return this.$store.state.mock.filter((user) => user.spi.toString().startsWith(this.entry))
    },
    filteredItemsByName() {
      return this.$store.state.mock.filter(
        (user) =>
          user.lastName.toString().toLowerCase().indexOf(this.entry) !== -1 ||
          user.lastName.toString().startsWith(this.entry)
      )
      // return this.$store.state.mock.filter((user) => user.lastName.toString().startsWith(this.entry))
    },
  },
}
</script>

<style>
</style>