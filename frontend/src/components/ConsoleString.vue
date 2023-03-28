<template lang="pug">
  div(id="main-console-block" :style="{width: mainWindowWidth, height: mainWindowHeight}" :class="classesMainBlock")
    div(id="console-string-0" :style="{width: mainWindowWidth, height: windowHeightConsoleString}" :class="classesConsoleStringElement")
      div(id="console-path" :class="classesConsolePath")
        span(class="console-base-servername") {{defaultPathServerValue}}
        span(class="console-base-colon") :
        span(class="console-base-path-string") {{defaultPathStringValue}}
        span(class="console-base-colon") $
      input(type="text" class="console-input" @focusin="onBlink" @focusout="offBlink" @keydown="terminalKeydown" :style="{width: windowWidthInput}")
      div(id="console-string-blink-0" :class="blinkWorkingClass" class="blink-default" :style="{width: defaultBlinkWidth, height: defaultBlinkHeight, left: consolePathWidth}")
    div(id="new-lines-block")
</template>

<script lang="ts">
import Vue from "vue";
import { InputKeysForConsole } from "@/enums/InputKeysForConsole";
import { ConsoleString } from "@/models/DownComponents/ConsoleString/ConsoleString";
import { NewLinesBlock } from "@/models/DownComponents/NewLinesBlock";
import { BaseServerNameInPathConsole } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/BaseServerNameInPathConsole";
import { PathString } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/PathString";

export default Vue.extend({
  name: "ConsoleString",
  mounted() {
    this.mainWindowWidth = `${Number(window.innerWidth)}px`;
    this.mainWindowHeight = `${Number(window.innerHeight) / 2}px`;
    this.windowWidthInput = `${Number(this.mainWindowWidth) - 100}px`;

    this.baseConsoleString = new ConsoleString(this.getBaseConsoleString());
    this.newLinesBlock = new NewLinesBlock();
    this.defaultPathServerValue = BaseServerNameInPathConsole.DEFAULT_TEXT;
    this.defaultPathStringValue = PathString.DEFAULT_TEXT;

    let numWidth =
      this.baseConsoleString.pathBlock.baseServerNameInPathConsole.width +
      this.baseConsoleString.pathBlock.colonInPath.width +
      this.baseConsoleString.pathBlock.pathString.width;
    this.consolePathWidth = String(numWidth + 40) + "px";
    this.windowHeightConsoleString = `${
      Number(window.innerHeight) /
      2 /
      NewLinesBlock.COUNT_CONSOLE_STRINGS_IN_BLOCK
    }px`;
    this.classesConsoleStringElement = ConsoleString.DEFAULT_CLASSNAME;
    console.log(NewLinesBlock.COUNT_CONSOLE_STRINGS_IN_BLOCK);
    this.baseConsoleString.blink.left = numWidth + 40;
  },
  data: function () {
    return {
      baseConsoleString: {} as ConsoleString,
      newLinesBlock: {} as NewLinesBlock,
      countConsoleString: 1,
      mainWindowWidth: "",
      mainWindowHeight: "",
      windowWidthInput: "",
      windowHeightConsoleString: "",
      classesMainBlock: "console-string",
      classesConsoleStringElement: "",
      inputCnt: 0,
      blinkWorkingClass: "", //?
      defaultBlinkWidth: "10px", //?
      defaultBlinkHeight: "26px", //?
      consolePathWidth: "", //?
      classesConsolePath: "console-path", //?
      defaultPathServerValue: "",
      defaultPathStringValue: "",
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
      } else if (this.isArrowUp(event.code)) {
        this.printBackCommandInConsole();
      }
    },
    onBlink: function () {
      this.blinkWorkingClass = "blink-working";
    },
    offBlink: function () {
      this.blinkWorkingClass = "";
    },
    createNewConsoleString: function () {
      let cloneConsoleString = new ConsoleString(
        this.baseConsoleString.getCloneHtmlElement()
      );

      // cancel focus
      cloneConsoleString.inputBlock.htmlElement.blur();

      const valueInBaseInput =
        this.baseConsoleString.inputBlock.htmlElement.value;
      this.baseConsoleString.inputBlock.htmlElement.value = "";

      cloneConsoleString.setAttributeInDivElement(
        "id",
        this.getConsoleStringId()
      );

      this.countConsoleString++;
      this.inputCnt = 0;

      cloneConsoleString.blink.setAttributeInDivElement(
        "id",
        this.getConsoleStringBlinkId()
      );

      this.baseConsoleString.blink.setDefaultSettingsBlink(
        this.consolePathWidth
      );

      cloneConsoleString.blink.className = "blink-default";

      if (this.newLinesBlock.linesListIsFull()) {
        this.newLinesBlock.removeLineInLinesBlock();
      }

      this.newLinesBlock.appendNewString(cloneConsoleString);

      if (this.issetCommand(valueInBaseInput)) {
        this.newLinesBlock.clearAllStrings();
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
    isArrowUp(eventCode: string): boolean {
      return eventCode === InputKeysForConsole.ArrowUp;
    },
    printSymbolAndMoveBlink(): void {
      this.inputCnt = this.inputCnt + 1;
      this.baseConsoleString.blink.setNewTransform(this.inputCnt);
      this.baseConsoleString.inputBlock.htmlElement.selectionStart =
        this.inputCnt;
    },
    clearSymbolAndMoveBlink(): void {
      this.inputCnt = this.inputCnt - 1;
      this.baseConsoleString.blink.setNewTransform(this.inputCnt);
    },
    getBaseConsoleString(): HTMLDivElement | null {
      return document.getElementById("console-string-0") as HTMLDivElement;
    },
    issetCommand(command: string): boolean {
      return command === "clear";
    },
    printBackCommandInConsole(): void {
      this.baseConsoleString.inputBlock.htmlElement.blur();
      let text =
        this.newLinesBlock.childBlocks[
          this.newLinesBlock.childBlocks.length - 1
        ].inputBlock.htmlElement.value;

      if (this.newLinesBlock.childBlocks.length > 0) {
        this.inputCnt = text.length;
        this.baseConsoleString.blink.setNewTransform(this.inputCnt);
        this.baseConsoleString.inputBlock.htmlElement.value = text;
        this.baseConsoleString.inputBlock.htmlElement.selectionStart =
          this.inputCnt - 2;
        this.baseConsoleString.inputBlock.htmlElement.selectionEnd =
          this.inputCnt - 2;
        this.baseConsoleString.inputBlock.htmlElement.focus();
      }
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
  align-items: end;
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
  //background-color: rgb(0, 0, 0);
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
  //background-color: rgb(0, 0, 0);

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
  //position: absolute;
  //left: 310px;
  //bottom: 10px;
}

.blink-working {
  background-color: #fff;
  opacity: 1;
  z-index: 5;
}
</style>
