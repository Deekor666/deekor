<template lang="pug">
  v-main(:style="{width: windowWidth, height: windowHeight}" :class="classes")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UpComponent",
  components: {},
  created() {
    this.windowWidth = `${window.innerWidth}px`;
    this.windowHeight = `${window.innerHeight / 2}px`;
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
