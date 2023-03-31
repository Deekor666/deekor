<template lang="pug">
  div(id="main-console-block" :style="{width: mainWindowWidth, height: mainWindowHeight}" :class="classesMainBlock")
    div(id="console-string-0" :style="{width: mainWindowWidth, height: windowHeightConsoleString}" :class="classesConsoleStringElement")
      div(:id="idDefaultPathBlock" :class="classDefaultConsolePath")
        span(:class="classDefaultConsoleBaseServerName") {{defaultPathServerValue}}
        span(:class="classDefaultConsoleBaseColon") {{defaultColonSymbol}}
        span(:class="classDefaultBasePathString") {{defaultPathStringValue}}
        span(class="console-base-dollar") $
      input(type="text" class="console-input" @focusin="onBlink" @focusout="offBlink" @keydown="terminalKeydown" :style="{width: windowWidthInput}")
      div(id="console-string-blink-0" :class="blinkWorkingClass" class="blink-default")
    div(id="new-lines-block")
</template>

<script lang="ts">
import Vue from "vue";
import { InputKeysForConsole } from "@/enums/InputKeysForConsole";
import { ConsoleString } from "@/models/DownComponents/ConsoleString/ConsoleString";
import { NewLinesBlock } from "@/models/DownComponents/NewLinesBlock";
import { BaseServerNameInPathConsole } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/BaseServerNameInPathConsole";
import { PathString } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/PathString";
import { Global } from "@/global";
import { PathBlock } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlock";
import { ColonInPath } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/ColonInPath";

export default Vue.extend({
  name: "ConsoleString",
  mounted() {
    this.mainWindowWidth = String(Number(window.innerWidth)) + Global.PX;
    this.mainWindowHeight = String(Number(window.innerHeight) / 2) + Global.PX;
    this.windowWidthInput =
      String(Number(this.mainWindowWidth) - 100) + Global.PX;

    this.baseConsoleString = new ConsoleString(this.getBaseConsoleString());
    this.newLinesBlock = new NewLinesBlock();
    let numWidth =
      this.baseConsoleString.pathBlock.baseServerNameInPathConsole.width +
      this.baseConsoleString.pathBlock.colonInPath.width +
      this.baseConsoleString.pathBlock.pathString.width;

    this.windowHeightConsoleString =
      String(
        Number(window.innerHeight) /
          2 /
          NewLinesBlock.COUNT_CONSOLE_STRINGS_IN_BLOCK
      ) + Global.PX;

    this.baseConsoleString.blink.left = numWidth + 16;
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
      classesConsoleStringElement: ConsoleString.DEFAULT_CLASSNAME,
      inputCnt: 0,
      blinkWorkingClass: "",
      classDefaultConsolePath: PathBlock.DEFAULT_CLASSNAME,
      defaultPathServerValue: BaseServerNameInPathConsole.DEFAULT_TEXT,
      defaultPathStringValue: PathString.DEFAULT_TEXT,
      defaultColonSymbol: ColonInPath.DEFAULT_SYMBOL,
      classDefaultBasePathString: PathString.DEFAULT_CLASSNAME,
      classDefaultConsoleBaseColon: ColonInPath.DEFAULT_CLASSNAME,
      classDefaultConsoleBaseServerName:
        BaseServerNameInPathConsole.DEFAULT_CLASSNAME,
      idDefaultPathBlock: PathBlock.DEFAULT_ID,
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

      // при клонировании объекта, ширина и высота почему-то равна 0.
      // пока сделал такой костыль, чтобы нормально работало
      cloneConsoleString.pathBlock.width =
        this.baseConsoleString.pathBlock.width;
      cloneConsoleString.pathBlock.height =
        this.baseConsoleString.pathBlock.height;

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

      this.baseConsoleString.blink.setDefaultSettingsBlink();

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
    getBaseConsoleString(): HTMLDivElement {
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

.console-base-dollar {
  color: rgb(167, 166, 166);
}

input {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  font-family: monospace;

  border: none;
  border-color: transparent;
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

.blink-working {
  background-color: #fff;
  opacity: 1;
  z-index: 5;
}
</style>
