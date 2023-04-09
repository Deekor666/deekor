<template lang="pug">
  v-main(:style="{width: windowWidth, height: windowHeight}" :class="classes")
    up-component
    down-component
</template>

<script lang="ts">
import Vue from "vue";
import UpComponent from "@/components/UpComponent.vue";
import DownComponent from "@/components/DownComponent.vue";
import { Global } from "@/global";

export default Vue.extend({
  name: "Home",

  components: {
    DownComponent,
    UpComponent,
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },

  mounted() {
    this.windowWidth = String(window.innerWidth) + Global.PX;
    this.windowHeight = String(window.innerHeight) + Global.PX;
  },
  data: function () {
    return {
      windowWidth: "",
      windowHeight: "",
      classes: "home",
    };
  },
  methods: {
    updateWidth() {
      this.windowWidth = String(window.innerWidth) + Global.PX;
      this.windowHeight = String(window.innerHeight) + Global.PX;
    },
  },
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
