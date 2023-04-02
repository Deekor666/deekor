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
    this.mainWindowWidth =
      String(window.innerWidth - Global.WIDTH_SCROLL_LINE) + Global.PX;
    this.mainWindowHeight = String(window.innerHeight / 2) + Global.PX;
    const htmlUpDisplay = document.getElementById(
      UpDisplayElement.DEFAULT_ELEMENT_ID
    ) as HTMLDivElement;

    this.upDisplay = new UpDisplayElement(htmlUpDisplay);
    this.upDisplay.playCommand("world");
  },
  data: function () {
    return {
      upDisplay: {} as UpDisplayElement,
      idMainUpDisplay: UpDisplayElement.DEFAULT_ELEMENT_ID,
      classMainUpDisplay: UpDisplayElement.DEFAULT_ELEMENT_CLASS,
      mainWindowWidth:
        String(window.innerWidth - Global.WIDTH_SCROLL_LINE) + Global.PX,
      mainWindowHeight: String(window.innerHeight / 2) + Global.PX,
    };
  },
  methods: {
    onBlink: function () {
      //TODO fill
    },
  },
});
</script>

<style lang="scss" scoped>
.up-display-component {
  position: absolute;
  background-color: skyblue;
}
</style>
