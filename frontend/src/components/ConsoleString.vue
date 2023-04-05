<template lang="pug">
  div(id="main-console-block" :style="{width: widthMainConsoleBlock, height: heightMainConsoleBlock}" :class="classMainConsoleBlock")
    div(:id="idConsoleString" :style="{width: widthConsoleString, height: heightConsoleString}" :class="classConsoleString")
      div(:id="idPathBlock" :class="classPathBlock")
        span(:class="classConsoleBaseServerName" :style="{width: widthConsoleBaseServerName}") {{valueConsoleBaseServerName}}
        span(:class="classConsoleColon" :style="{width: widthConsoleColon}") {{valueConsoleColon}}
        span(:class="classPathString" :style="{width: widthPathString}") {{valuePathString}}
        span(:class="classPathLastSymbol" :style="{width: widthPathLastSymbol}") {{valuePathLastSymbol}}
      input(type="text" :class="classConsoleInput" :style="{widthConsoleInput, height: heightConsoleInput}" @focusin="onBlink" @focusout="offBlink" @keydown="terminalKeydown")
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
import { InputBlock } from "@/models/DownComponents/ConsoleString/InputBlock";
import { DownCommands } from "@/enums/DownCommands";
import { UpAdditionalCommands } from "@/enums/UpAdditionalCommands";
import { UpDisplayElement } from "@/models/UpComponents/UpDisplayElement";
import { PathLastSymbol } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/PathLastSymbol";
import { UpRunCommands } from "@/enums/UpRunCommands";

export default Vue.extend({
  name: "ConsoleString",
  mounted() {
    this.init();
  },
  data: function () {
    return {
      baseConsoleString: {} as ConsoleString,
      newLinesBlock: {} as NewLinesBlock,
      countConsoleStrings: 1,
      inputCnt: 0,

      widthMainConsoleBlock: "",
      heightMainConsoleBlock: "",
      classMainConsoleBlock: "console-string",

      widthConsoleString: "",
      heightConsoleString: "",
      idConsoleString: ConsoleString.DEFAULT_ID,
      classConsoleString: ConsoleString.DEFAULT_CLASSNAME,

      idPathBlock: PathBlock.DEFAULT_ID,
      classPathBlock: PathBlock.DEFAULT_CLASSNAME,
      widthPathBlock: "",

      classConsoleBaseServerName: BaseServerNameInPathConsole.DEFAULT_CLASSNAME,
      valueConsoleBaseServerName: BaseServerNameInPathConsole.DEFAULT_TEXT,
      widthConsoleBaseServerName:
        BaseServerNameInPathConsole.DEFAULT_TEXT.length *
        Global.WIDTH_ONE_SYMBOL,

      classConsoleColon: ColonInPath.DEFAULT_CLASSNAME,
      valueConsoleColon: ColonInPath.DEFAULT_SYMBOL,
      widthConsoleColon:
        ColonInPath.DEFAULT_SYMBOL.length * Global.WIDTH_ONE_SYMBOL,

      classPathString: PathString.DEFAULT_CLASSNAME,
      valuePathString: PathString.DEFAULT_TEXT,
      widthPathString: PathString.DEFAULT_TEXT.length * Global.WIDTH_ONE_SYMBOL,

      classPathLastSymbol: PathLastSymbol.DEFAULT_CLASSNAME,
      valuePathLastSymbol: PathLastSymbol.DEFAULT_SYMBOL,
      widthPathLastSymbol:
        PathLastSymbol.DEFAULT_SYMBOL.length * Global.WIDTH_ONE_SYMBOL,

      classConsoleInput: InputBlock.DEFAULT_CLASSNAME,
      widthConsoleInput: "",
      heightConsoleInput: "",

      blinkWorkingClass: "",
    };
  },

  methods: {
    init: function () {
      this.widthMainConsoleBlock = String(window.innerWidth) + Global.PX;
      this.heightMainConsoleBlock =
        String(Number(window.innerHeight) / 3) + Global.PX;

      this.widthConsoleString = String(window.innerWidth) + Global.PX;

      this.heightConsoleString =
        String(
          Number(window.innerHeight) /
            3 /
            NewLinesBlock.COUNT_CONSOLE_STRINGS_IN_BLOCK
        ) + Global.PX;

      this.baseConsoleString = new ConsoleString(this.getBaseConsoleString());

      this.newLinesBlock = new NewLinesBlock();

      this.widthPathBlock =
        String(
          this.baseConsoleString.pathBlock.baseServerNameInPathConsole.width +
            this.baseConsoleString.pathBlock.colonInPath.width +
            this.baseConsoleString.pathBlock.pathString.width +
            this.baseConsoleString.pathBlock.pathLastSymbol.width
        ) + Global.PX;

      this.baseConsoleString.blink.left = parseInt(this.widthPathBlock, 10) + 2;
      this.baseConsoleString.blink.height =
        parseInt(this.heightConsoleString, 10) - 3;

      this.heightConsoleInput = this.heightConsoleString;
      this.widthConsoleInput =
        String(window.innerWidth - parseInt(this.widthPathBlock, 10)) +
        Global.PX;
      this.baseConsoleString.inputBlock.width =
        window.innerWidth - parseInt(this.widthPathBlock, 10);
    },

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

      // При клонировании объекта, ширина и высота почему-то равна 0.
      // пока сделал такой костыль, чтобы нормально работало
      cloneConsoleString.pathBlock.width = parseInt(this.widthPathBlock, 10);
      cloneConsoleString.pathBlock.height = parseInt(
        this.heightConsoleString,
        10
      );
      cloneConsoleString.inputBlock.width = parseInt(
        this.widthConsoleInput,
        10
      );
      cloneConsoleString.width = parseInt(this.widthConsoleString, 10);

      cloneConsoleString.pathBlock.baseServerNameInPathConsole.width =
        this.widthConsoleBaseServerName;
      cloneConsoleString.pathBlock.colonInPath.width = this.widthConsoleColon;
      cloneConsoleString.pathBlock.pathString.width = this.widthPathString;
      cloneConsoleString.pathBlock.pathLastSymbol.width =
        this.widthPathLastSymbol;

      // cancel focus
      cloneConsoleString.inputBlock.htmlElement.blur();
      cloneConsoleString.blink.offBlink();

      const valueInBaseInput =
        this.baseConsoleString.inputBlock.htmlElement.value;
      this.baseConsoleString.inputBlock.htmlElement.value = "";

      cloneConsoleString.setAttributeInDivElement(
        "id",
        this.getConsoleStringId()
      );

      this.countConsoleStrings++;
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

      const upComponent: UpDisplayElement = this.$store.getters.getUpComponent;

      if (this.issetCommandDown(valueInBaseInput)) {
        // Только для clear. Если появятся ещё команды требующие
        // действия в консоли, проработать это место
        this.newLinesBlock.clearAllStrings();
        if (valueInBaseInput === "clear all") {
          upComponent.playCommand(
            valueInBaseInput,
            this.$store.getters.getScene
          );
        }
      }

      if (this.commandRun(valueInBaseInput)) {
        if (this.issetRunCommandUp(this.getCommandRun(valueInBaseInput))) {
          this.$store.state.scene = upComponent.playScene(
            this.getCommandRun(valueInBaseInput)
          );
        }
      }

      if (this.issetAdditionalCommandUp(valueInBaseInput)) {
        upComponent.playCommand(valueInBaseInput, this.$store.getters.getScene);
      }
    },

    getConsoleStringId() {
      return `console-string-${this.countConsoleStrings}`;
    },

    getConsoleStringBlinkId() {
      return `console-string-blink-${this.countConsoleStrings}`;
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
      this.baseConsoleString.inputBlock.htmlElement.selectionStart =
        this.inputCnt + 1;
    },

    getBaseConsoleString(): HTMLDivElement {
      return document.getElementById(this.idConsoleString) as HTMLDivElement;
    },

    commandRun(value: string): boolean {
      return value.indexOf("run ") === 0;
    },

    getCommandRun(value: string): string {
      return value.split(" ")[1];
    },

    issetCommandDown(value: string): value is DownCommands {
      return Object.values(DownCommands).includes(value as DownCommands);
    },

    issetRunCommandUp(value: string): value is UpRunCommands {
      return Object.values(UpRunCommands).includes(value as UpRunCommands);
    },

    issetAdditionalCommandUp(value: string): value is UpAdditionalCommands {
      return Object.values(UpAdditionalCommands).includes(
        value as UpAdditionalCommands
      );
    },

    printBackCommandInConsole(): void {
      if (this.newLinesBlock.childBlocks.length > 0) {
        this.baseConsoleString.inputBlock.htmlElement.blur();
        let text =
          this.newLinesBlock.childBlocks[
            this.newLinesBlock.childBlocks.length - 1
          ].inputBlock.htmlElement.value;

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
  justify-content: left;
  flex-direction: column-reverse;
  align-items: end;
}

#new-lines-block {
  width: 100%;
  display: flex;
  align-items: flex-start;
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

span {
  font-family: monospace;
  font-weight: 700;
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
