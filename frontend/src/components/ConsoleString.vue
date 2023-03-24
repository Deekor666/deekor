<template lang="pug">
  div(id="main-console-block" :style="{width: windowWidth, height: windowHeightDownBlock}" :class="classesMainBlock")
    div(id="console-string-0" :style="{width: windowWidth, height: windowHeightConsoleString}" :class="classesConsoleStringElement")
      div(id="console-path" :class="classesConsolePath")
        span(class="console-base-servername") Deekor
        span(class="console-base-colon") :
        span(class="console-base-path-string") ~/
        span(class="console-base-colon") $
      input(type="text" class="console-input" @focusin="onBlink" @focusout="offBlink" @keydown="terminalKeydown" :style="{width: windowWidthInput}")
      div(id="console-string-blink-0" :class="blinkWorking" class="blink-default" :style="{transform: inputTransform, width: blinkWidth, height: blinkHeight, left: consolePathWidth}")
    div(id="new-lines-block")
</template>

<script lang="ts">
import Vue from "vue";
import { InputKeysForConsole } from "@/enums/InputKeysForConsole";
import { ConsoleString } from "@/models/DownComponents/ConsoleString/ConsoleString";

export default Vue.extend({
  name: "ConsoleString",
  mounted() {
    this.windowWidth = `${Number(window.innerWidth)}px`;
    this.windowHeightDownBlock = `${Number(window.innerHeight) / 2}px`;
    this.windowHeightConsoleString = `${
      Number(window.innerHeight) / 2 / this.countConsoleStringsInBlock
    }px`;
    this.windowWidthInput = `${Number(this.windowWidth) - 100}px`;
    const consolePathWidth: HTMLDivElement | null =
      document.querySelector("#console-path");
    if (consolePathWidth instanceof HTMLDivElement) {
      this.consolePathWidth =
        (consolePathWidth.clientWidth + 5).toString() + "px";
    }
  },
  data: function () {
    return {
      countConsoleString: 1,
      windowWidth: "",
      windowHeightDownBlock: "",
      windowWidthInput: "",
      windowHeightConsoleString: "",
      classesMainBlock: "console-string",
      classesConsoleStringElement: "console-string-element",
      inputCnt: 0,
      inputTransform: "",
      blinkWorking: "",
      blinkWidth: "10px",
      blinkHeight: "26px",
      consolePathWidth: "",
      countConsoleStringsInBlock: 15,
      stringsBlock: [] as HTMLElement[],
      classesConsolePath: "console-path",
    };
  },

  methods: {
    terminalKeydown: function (event: KeyboardEvent) {
      if (this.isAllowedSymbol(event.code)) {
        this.printSymbolAndMoveBlink();
      } else if (this.isBackspace(event.code)) {
        if (this.inputCnt > 0) {
          this.clearSymbolAndMoveBlink();
        }
      } else if (this.isEnter(event.code)) {
        this.createNewConsoleString();
      }
    },
    onBlink: function () {
      this.blinkWorking = "blink-working";
    },
    offBlink: function () {
      this.blinkWorking = "";
    },
    createNewConsoleString: function () {
      const linesBlock = this.getLinesBlock();
      if (linesBlock === null || linesBlock === undefined) {
        console.log("linesBlock === null || undefined");
        return;
      }

      const baseConsoleString = this.getBaseConsoleString();
      if (baseConsoleString === null || baseConsoleString === undefined) {
        console.log("baseConsoleString === null || undefined");
        return;
      }

      let testBaseConsole = new ConsoleString(baseConsoleString);
      console.log(testBaseConsole);
      let cloneTestString = testBaseConsole.getCloneHtmlElement();
      console.log(cloneTestString);

      let baseConsoleStringInput =
        this.getInputFromParentElement(baseConsoleString);
      let baseConsoleStringBlink: HTMLElement | null =
        this.getBlinkFromParentElement(baseConsoleString);

      if (baseConsoleStringInput === null) {
        console.log("baseConsoleStringInput === null || undefined");
        return;
      }
      if (baseConsoleStringBlink === null) {
        console.log("baseConsoleStringBlink === null");
        return;
      }
      let newConsoleString = this.cloneNewConsoleString(baseConsoleString);
      if (newConsoleString === null || newConsoleString === undefined) {
        console.log("newConsoleString === null || undefined");
        return;
      }
      let newConsoleStringInput =
        this.getInputFromParentElement(newConsoleString);

      let newBlink = this.getBlinkFromParentElement(newConsoleString);
      if (newBlink === null || newBlink === undefined) {
        console.log("newBlink === null || undefined");
        return;
      }

      // cancel focus
      newConsoleStringInput.blur();
      const valueInBaseInput = baseConsoleStringInput.value;
      this.clearValueInInputElement(baseConsoleStringInput);

      this.setAttributeInDivElement(
        newConsoleString,
        "id",
        this.getConsoleStringId()
      );

      this.countConsoleString++;
      this.inputCnt = 0;

      this.setAttributeInDivElement(
        newBlink,
        "id",
        this.getConsoleStringBlinkId()
      );

      this.setDefaultSettingsBlink(baseConsoleStringBlink);

      this.setClassInElement(newBlink, "blink-default");

      if (this.linesListIsFull()) {
        this.removeLineInLinesBlock();
      }

      this.stringsBlock.push(newConsoleString);
      linesBlock.append(newConsoleString);

      if (this.issetCommand(valueInBaseInput)) {
        this.clearAllStrings();
      }
    },
    getConsoleStringId() {
      return `console-string-${this.countConsoleString}`;
    },
    getConsoleStringBlinkId() {
      return `console-string-blink-${this.countConsoleString}`;
    },
    isAllowedSymbol(eventCode: string): boolean {
      return (
        eventCode.match(/^Key[a-zA-Z0-9+_@.-]$/) !== null ||
        eventCode.match(/^Digit[a-zA-Z0-9+_@.-]$/) !== null ||
        (!this.isBackspace(eventCode) &&
          (eventCode === InputKeysForConsole.Space ||
            eventCode === InputKeysForConsole.Minus ||
            eventCode === InputKeysForConsole.Equal ||
            eventCode === InputKeysForConsole.Slash ||
            eventCode === InputKeysForConsole.Backquote))
      );
    },
    isBackspace(eventCode: string): boolean {
      return eventCode === InputKeysForConsole.Backspace;
    },
    isEnter(eventCode: string): boolean {
      return eventCode === InputKeysForConsole.Enter;
    },
    printSymbolAndMoveBlink(): void {
      this.inputCnt = this.inputCnt + 1;
      this.moveBlink();
    },
    clearSymbolAndMoveBlink(): void {
      this.inputCnt = this.inputCnt - 1;
      this.moveBlink();
    },
    moveBlink(): void {
      this.inputTransform =
        "translateX(" + (this.inputCnt * 12).toString() + "px)";
    },
    getLinesBlock(): HTMLElement | null {
      return document.getElementById("new-lines-block");
    },
    getBaseConsoleString(): HTMLDivElement | null {
      return document.getElementById("console-string-0") as HTMLDivElement;
    },
    getInputFromParentElement(parentElement: HTMLElement): HTMLInputElement {
      return parentElement.getElementsByTagName("input")[0];
    },
    getBlinkFromParentElement(parentElement: HTMLElement): HTMLElement | null {
      return parentElement.getElementsByClassName(
        "blink-default"
      )[0] as HTMLElement;
    },
    cloneNewConsoleString(consoleString: HTMLDivElement): HTMLDivElement {
      return consoleString.cloneNode(true) as HTMLDivElement;
    },

    setClassInElement(elem: HTMLElement, className: string): HTMLElement {
      elem.className = className;
      return elem;
    },
    clearValueInInputElement(elem: HTMLInputElement) {
      elem.value = "";
    },
    setAttributeInDivElement(
      elem: HTMLElement,
      attrName: string,
      attrValue: string
    ) {
      elem.setAttribute(attrName, attrValue);
    },
    setDefaultSettingsBlink(blink: HTMLElement): void {
      blink.style.left = this.consolePathWidth;
      blink.style.transform = "";
    },
    linesListIsFull(): boolean {
      return this.stringsBlock.length >= this.countConsoleStringsInBlock - 1;
    },
    removeLineInLinesBlock(): void {
      let firstElem = this.stringsBlock.shift();
      firstElem?.remove();
    },
    issetCommand(command: string): boolean {
      return command === "clear";
    },
    clearAllStrings(): void {
      this.stringsBlock.forEach((consoleString: HTMLElement) => {
        consoleString.remove();
      });
      this.stringsBlock = [];
    },
  },
});
</script>

<style lang="scss" scoped>
.console-string {
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;
  align-items: end;
}

#new-lines-block {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.console-string-element {
  background: black;
  position: relative;
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
}

.new-console-string-element {
  background: black;
  position: relative;
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
}

span {
  font-family: monospace;
  font-weight: 700;
}

.console-base-servername {
  color: chartreuse;
}

.console-base-path-string {
  color: cyan;
}

.console-base-colon {
  color: rgb(167, 166, 166);
}

input {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  font-family: monospace;

  border: none;
  border-color: transparent;
  background-color: rgb(0, 0, 0);
  width: 75%;
}

input:focus {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  font-family: monospace;

  border: none;
  border-color: transparent;
  outline: none;
  background-color: rgb(0, 0, 0);

  width: 75%;
  caret-color: #000;
}

@keyframes blink_ani {
  from {
    background-color: #000;
  }
  to {
    background-color: #fff;
  }
}

.blink-working {
  animation: blink_ani 0.5s infinite;
}

.blink-default {
  position: absolute;
  left: 310px;
  top: 3px;
}

.blink-working {
  background-color: #fff;
  opacity: 1;
  z-index: 5;
}
</style>
