<template lang="pug">
  v-main(:style="{width: windowWidth, height: windowHeight}" :class="classes")
    console-string
</template>

<script lang="ts">
import Vue from "vue";

import ConsoleString from "@/components/ConsoleString.vue";

export default Vue.extend({
  name: "DownComponent",
  components: {
    ConsoleString,
  },
  created() {
    this.windowWidth = `${window.innerWidth}px`;
    this.windowHeight = `${window.innerHeight / 2}px`;
  },
  data: function () {
    return {
      windowWidth: "500px",
      windowHeight: "500px",
      classes: "down-component",
    };
  },
  methods: {},
  computed: {},
});
</script>
<style lang="scss" scoped>
.down-component {
  width: 100%;
  height: 50%;
  background: black;
  opacity: 0.6;
}
</style>
