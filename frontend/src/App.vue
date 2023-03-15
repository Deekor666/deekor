<template lang="pug">
  v-app
    header-component
    v-main
      router-view
</template>

<script lang="ts">
import Vue from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default Vue.extend({
  name: "App",
  components: {
    HeaderComponent,
  },

  data: () => ({
    //
  }),
});
</script>
