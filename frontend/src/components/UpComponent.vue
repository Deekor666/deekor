<template lang="pug">
  v-main(:id="idBaseUpHtmlElement" :style="{width: windowWidth, height: windowHeight}" :class="classBaseUpHtmlElement")
    up-display
</template>

<script lang="ts">
import Vue from "vue";
import { Global } from "@/global";
import { UpHtmlElement } from "@/models/UpComponents/UpHtmlElement";
import UpDisplay from "@/components/UpDisplay.vue";

export default Vue.extend({
  name: "UpComponent",
  components: { UpDisplay },
  mounted() {
    this.windowWidth = String(window.innerWidth) + Global.PX;
    this.windowHeight = String((window.innerHeight / 3) * 2) + Global.PX;
  },
  data: function () {
    return {
      classBaseUpHtmlElement: UpHtmlElement.DEFAULT_ELEMENT_CLASS,
      idBaseUpHtmlElement: UpHtmlElement.DEFAULT_ELEMENT_ID,
      windowWidth: "",
      windowHeight: "",
    };
  },
  methods: {},
  computed: {},
});
</script>
<style lang="scss" scoped>
.up-component {
  background-color: black;
}
</style>
