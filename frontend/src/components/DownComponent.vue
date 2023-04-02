<template lang="pug">
  v-main(:style="{width: windowWidth, height: windowHeight}" :class="classes")
    console-string
</template>

<script lang="ts">
import Vue from "vue";

import ConsoleString from "@/components/ConsoleString.vue";
import { Global } from "@/global";

export default Vue.extend({
  name: "DownComponent",
  components: {
    ConsoleString,
  },
  created() {
    this.windowWidth =
      String(window.innerWidth - Global.WIDTH_SCROLL_LINE) + Global.PX;
    this.windowHeight = String(window.innerHeight / 2) + Global.PX;
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
