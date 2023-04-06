import { PathBlock } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlock";
import { InputBlock } from "@/models/DownComponents/ConsoleString/InputBlock";
import { Blink } from "@/models/DownComponents/ConsoleString/Blink";
import { Global } from "@/global";
import { BaseHtmlElement } from "@/models/BaseModels/BaseHtmlElement";

export class ConsoleString extends BaseHtmlElement {
  private _pathBlock: PathBlock;
  private _inputBlock: InputBlock;
  private _blink: Blink;

  constructor(
    htmlElement: HTMLElement | string,
    width: number,
    height: number,
    className?: string,
    pathBlock?: PathBlock,
    inputBlock?: InputBlock,
    blink?: Blink
  ) {
    if (htmlElement instanceof HTMLElement) {
      super(htmlElement, width, height, className);
    } else {
      super(htmlElement, width, height, className);
    }

    if (htmlElement instanceof HTMLElement) {
      this._pathBlock = this.createPathBlockFromConsoleString();
      this._inputBlock = this.createInputBlockFromConsoleString();
      this._blink = this.createBlinkBlockFromConsoleString();

      this.childList.push(this._pathBlock.htmlElement);
      this.childList.push(this._inputBlock.htmlElement);
      this.childList.push(this._blink.htmlElement);
    } else {
      this._pathBlock = pathBlock as PathBlock;
      this._inputBlock = inputBlock as InputBlock;
      this._blink = blink as Blink;
    }

    this.fillStyleHtmlElement();
  }

  private createBlinkBlockFromConsoleString(): Blink {
    const elem: HTMLElement = this.getDivElementByClassName(
      this._htmlElement,
      Blink.DEFAULT_CLASSNAME
    );
    return new Blink(elem, Blink.DEFAULT_WIDTH, Blink.DEFAULT_HEIGHT);
  }

  private createInputBlockFromConsoleString(): InputBlock {
    const elem: HTMLElement = this.getInputElementByTagName(
      this._htmlElement,
      InputBlock.DEFAULT_ELEMENT_TYPE
    );
    return new InputBlock(elem, elem.offsetWidth, elem.offsetHeight);
  }

  private createPathBlockFromConsoleString(): PathBlock {
    const elem: HTMLElement = this.getDivElementByClassName(
      this._htmlElement,
      PathBlock.DEFAULT_CLASSNAME
    );
    return new PathBlock(elem, elem.offsetWidth, elem.offsetHeight);
  }

  private getInputElementByTagName(
    htmlElement: HTMLElement,
    tagName: string
  ): HTMLInputElement {
    return htmlElement.getElementsByTagName(tagName)[0] as HTMLInputElement;
  }

  private getDivElementByClassName(
    htmlElement: HTMLElement,
    className: string
  ): HTMLDivElement {
    return htmlElement.getElementsByClassName(className)[0] as HTMLDivElement;
  }

  get blink(): Blink {
    return this._blink;
  }

  set blink(value: Blink) {
    this._blink = value;
  }

  get inputBlock(): InputBlock {
    return this._inputBlock;
  }

  set inputBlock(value: InputBlock) {
    this._inputBlock = value;
  }

  get pathBlock(): PathBlock {
    return this._pathBlock;
  }

  set pathBlock(value: PathBlock) {
    this._pathBlock = value;
  }

  public fillStyleHtmlElement() {
    this.htmlElement.style.display = ConsoleString.DEFAULT_STYLE_DISPLAY;
    this.htmlElement.style.justifyContent =
      ConsoleString.DEFAULT_STYLE_JUSTIFY_CONTENT;
    this.htmlElement.style.flexDirection =
      ConsoleString.DEFAULT_STYLE_FLEX_DIRECTION;
    this.htmlElement.style.alignItems = ConsoleString.DEFAULT_STYLE_ALIGN_ITEMS;
    this.htmlElement.style.fontSize =
      String(ConsoleString.DEFAULT_STYLE_FONT_SIZE) + Global.PX;
    this.htmlElement.style.background = ConsoleString.DEFAULT_STYLE_BACKGROUND;
  }

  public static DEFAULT_CLASSNAME = "console-string-element";
  public static DEFAULT_ID = "console-string-0";
  public static DEFAULT_STYLE_BACKGROUND = "black";
  public static DEFAULT_STYLE_POSITION = "relative";
  public static DEFAULT_STYLE_DISPLAY = "flex";
  public static DEFAULT_STYLE_JUSTIFY_CONTENT = "start";
  public static DEFAULT_STYLE_FLEX_DIRECTION = "row";
  public static DEFAULT_STYLE_ALIGN_ITEMS = "center";
  public static DEFAULT_STYLE_FONT_SIZE = 20;
}
