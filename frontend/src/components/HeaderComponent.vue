<template lang="pug">
  v-container
    div test
    v-app-bar(app color="primary" dark)
      div(class="d-flex align-center")
        v-img(
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        )

        v-img(
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        )

      v-spacer

      v-btn(
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      )
        span(class="mr-2") TEST TEST
        v-icon mdi-open-in-new

</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderComponent",
});
</script>
<style lang="scss"></style>
