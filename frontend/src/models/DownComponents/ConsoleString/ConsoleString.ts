import { PathBlock } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlock";
import { InputBlock } from "@/models/DownComponents/ConsoleString/InputBlock";
import { Blink } from "@/models/DownComponents/ConsoleString/Blink";
import { Global } from "@/global";

export class ConsoleString {
  private _childBlocks = [] as HTMLElement[];
  public static COUNT_STRINGS = 15;
  private _htmlElementType = "div";
  public static DEFAULT_CLASSNAME = "console-string-element";
  public static DEFAULT_STYLE_BACKGROUND = "black";
  public static DEFAULT_STYLE_POSITION = "relative";
  public static DEFAULT_STYLE_DISPLAY = "flex";
  public static DEFAULT_STYLE_JUSTIFY_CONTENT = "start";
  public static DEFAULT_STYLE_FLEX_DIRECTION = "row";
  public static DEFAULT_STYLE_ALIGN_ITEMS = "center";
  public static DEFAULT_STYLE_FONT_SIZE = 20;
  private _width: number;
  private _height: number;
  private _className: string;
  private _pathBlock: PathBlock;
  private _inputBlock: InputBlock;
  private _blink: Blink;
  private _htmlElement: HTMLElement;

  constructor(htmlElement: HTMLElement | null) {
    if (htmlElement === null) {
      this._htmlElement = this.createHtmlElement();
    } else {
      this._htmlElement = htmlElement;
    }
    this._width = Number(this._htmlElement.style.width);
    this._height = Number(this._htmlElement.style.height);
    this._className = this._htmlElement.className;

    this._pathBlock = this.createPathBlockFromConsoleString();
    this._inputBlock = this.createInputBlockFromConsoleString();
    this._blink = this.createBlinkBlockFromConsoleString();

    this._childBlocks.push(this.pathBlock.htmlElement);
    this._childBlocks.push(this.inputBlock.htmlElement);
    this._childBlocks.push(this.blink.htmlElement);
  }

  private createBlinkBlockFromConsoleString(): Blink {
    return new Blink(
      this.getDivElementByClassName(this._htmlElement, Blink.DEFAULT_CLASSNAME)
    );
  }

  private createInputBlockFromConsoleString(): InputBlock {
    return new InputBlock(
      this.getInputElementByTagName(
        this._htmlElement,
        InputBlock.HTML_ELEMENT_TYPE
      )
    );
  }

  private createPathBlockFromConsoleString(): PathBlock {
    return new PathBlock(
      this.getDivElementByClassName(
        this._htmlElement,
        PathBlock.DEFAULT_CLASSNAME
      )
    );
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

  get childBlocks(): HTMLElement[] {
    return this._childBlocks;
  }

  set childBlocks(value: HTMLElement[]) {
    this._childBlocks = value;
  }

  get htmlElementType(): string {
    return this._htmlElementType;
  }

  set htmlElementType(value: string) {
    this._htmlElementType = value;
  }

  get htmlElement(): HTMLElement {
    return this._htmlElement;
  }

  set htmlElement(value: HTMLElement) {
    this._htmlElement = value;
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

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
  }

  get pathBlock(): PathBlock {
    return this._pathBlock;
  }

  set pathBlock(value: PathBlock) {
    this._pathBlock = value;
  }

  public createHtmlElement(): HTMLDivElement {
    let htmlElement = document.createElement(
      this.htmlElementType
    ) as HTMLDivElement;
    htmlElement = this.fillClassHtmlElement(htmlElement);
    htmlElement = this.fillStyleHtmlElement(htmlElement);
    return htmlElement;
  }

  public fillStyleHtmlElement(elem: HTMLDivElement): HTMLDivElement {
    elem.style.width = String(this._width) + Global.PX;
    elem.style.height = String(this._height) + Global.PX;
    elem.style.display = ConsoleString.DEFAULT_STYLE_DISPLAY;
    elem.style.justifyContent = ConsoleString.DEFAULT_STYLE_JUSTIFY_CONTENT;
    elem.style.flexDirection = ConsoleString.DEFAULT_STYLE_FLEX_DIRECTION;
    elem.style.alignItems = ConsoleString.DEFAULT_STYLE_ALIGN_ITEMS;
    elem.style.fontSize =
      String(ConsoleString.DEFAULT_STYLE_FONT_SIZE) + Global.PX;
    elem.style.background = ConsoleString.DEFAULT_STYLE_BACKGROUND;

    return elem;
  }

  public fillClassHtmlElement(elem: HTMLDivElement): HTMLDivElement {
    elem.className = this._className;
    return elem;
  }

  public fillConsoleStrings() {
    this.childBlocks.forEach((block) => {
      this.fillChildHtmlElement(block);
    });
  }

  public fillChildHtmlElement(elem: HTMLElement) {
    this._htmlElement.append(elem);
  }

  public getCloneHtmlElement(): HTMLElement {
    return this.htmlElement.cloneNode(true) as HTMLElement;
  }

  public setAttributeInDivElement(attrName: string, attrValue: string) {
    this.htmlElement.setAttribute(attrName, attrValue);
  }
}
