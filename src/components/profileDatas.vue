<template>
  <div>
    <v-data-table
      v-on="$listeners"
      height="500"
      :class="tableClass"
      :no-data-text="noDataText"
      :no-results-text="noResultText"
      hide-default-footer
      fixed-header
      disable-pagination
      v-bind="$attrs"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    height: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      tableClass: 'mx-auto',
      noDataText: "Il n'y a aucune donnée à afficher.",
      noResultText: 'Désolé mais aucun résultat ne correspond à votre recherche.',
    }
  },
}
</script>

<style>
</style>