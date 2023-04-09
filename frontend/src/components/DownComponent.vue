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
    window.addEventListener("resize", this.updateWidth);
  },
  mounted() {
    this.windowWidth = String(window.innerWidth) + Global.PX;
    this.windowHeight = String(window.innerHeight / 3) + Global.PX;
  },
  data: function () {
    return {
      windowWidth: "",
      windowHeight: "",
      classes: "down-component",
    };
  },
  methods: {
    updateWidth() {
      this.windowWidth = String(window.innerWidth) + Global.PX;
      this.windowHeight = String(window.innerHeight / 3) + Global.PX;
    },
  },
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
