<template lang="pug">
  v-main(:style="{width: windowWidth, height: windowHeight}" :class="classes")
</template>

<script lang="ts">
import Vue from "vue";
import { Global } from "@/global";

export default Vue.extend({
  name: "UpComponent",
  components: {},
  created() {
    this.windowWidth = String(window.innerWidth) + Global.PX;
    this.windowHeight = String(window.innerHeight / 2) + Global.PX;
  },
  data: function () {
    return {
      windowWidth: "500px",
      windowHeight: "500px",
      classes: "up-component",
    };
  },
  methods: {},
  computed: {},
});
</script>
<style lang="scss" scoped>
.up-component {
  width: 100%;
  height: 50%;
  background: red;
  opacity: 0.6;
}
</style>
