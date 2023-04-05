<template lang="pug">
  div(:id="idMainUpDisplay" :style="{width: mainWindowWidth, height: mainWindowHeight}" :class="classMainUpDisplay")

</template>

<script lang="ts">
import { UpDisplayElement } from "@/models/UpComponents/UpDisplayElement";
import { Global } from "@/global";
import Vue from "vue";

export default Vue.extend({
  name: "UpDisplay",
  mounted() {
    this.mainWindowWidth = String(window.innerWidth) + Global.PX;
    this.mainWindowHeight = String((window.innerHeight / 3) * 2) + Global.PX;
    const htmlUpDisplay = document.getElementById(
      UpDisplayElement.DEFAULT_ELEMENT_ID
    ) as HTMLDivElement;

    this.upDisplay = new UpDisplayElement(htmlUpDisplay);
    this.$store.state.upDisplay = this.upDisplay;
  },
  data: function () {
    return {
      sceneIsPlay: true,
      upDisplay: {} as UpDisplayElement,
      idMainUpDisplay: UpDisplayElement.DEFAULT_ELEMENT_ID,
      classMainUpDisplay: UpDisplayElement.DEFAULT_ELEMENT_CLASS,
      mainWindowWidth: String(window.innerWidth) + Global.PX,
      mainWindowHeight: String((window.innerHeight / 3) * 2) + Global.PX,
    };
  },
  methods: {
    displayKeyDown: function () {
      // подключить - v-on:click="displayKeyDown"
      if (this.upDisplay.scene !== null) {
        if (this.sceneIsPlay) {
          this.upDisplay.scene.stop();
          this.sceneIsPlay = false;
        } else {
          this.upDisplay.scene.start();
          this.sceneIsPlay = true;
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.up-display-component {
  position: absolute;
  background-color: black;
}
</style>
