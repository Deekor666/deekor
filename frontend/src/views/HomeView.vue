<template lang="pug">
  v-main(:style="{width: windowWidth, height: windowHeight}" :class="classes")
    up-component
    down-component
</template>

<script lang="ts">
import Vue from "vue";
import UpComponent from "@/components/UpComponent.vue";
import DownComponent from "@/components/DownComponent.vue";

export default Vue.extend({
  name: "Home",

  components: {
    DownComponent,
    UpComponent,
  },
  created() {
    this.windowWidth = `${window.innerWidth}px`;
    this.windowHeight = `${window.innerHeight}px`;
  },
  data: function () {
    return {
      windowWidth: "",
      windowHeight: "",
      classes: "home",
    };
  },
  methods: {},
  computed: {},
});
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
  background: aqua;
}
</style>
