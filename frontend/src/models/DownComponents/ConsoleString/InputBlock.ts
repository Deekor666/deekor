export class InputBlock {
  public static HTML_ELEMENT_TYPE = "input";
  private _htmlElement: HTMLElement;
  private _className: string;
  private _width: number;
  private _isFocus = false;
  public static DEFAULT_CLASSNAME = "console-input";
  public static DEFAULT_STYLE_COLOR = "#fff";
  public static DEFAULT_STYLE_FONT_SIZE = 20;
  public static DEFAULT_STYLE_FONT_WEIGHT = 700;
  public static DEFAULT_STYLE_FONT_FAMILY = "monospace";
  public static DEFAULT_STYLE_BORDER = "none";
  public static DEFAULT_STYLE_BORDER_COLOR = "transparent";
  public static DEFAULT_STYLE_BACKGROUND_COLOR = "rgb(0, 0, 0)";
  public static DEFAULT_STYLE_WIDTH = "75%";

  constructor(htmlElement: HTMLInputElement) {
    this._htmlElement = htmlElement;
    this._className = htmlElement.className;
    this._width = Number(htmlElement.style.width);
  }

  get htmlElement(): HTMLElement {
    return this._htmlElement;
  }

  set htmlElement(value: HTMLElement) {
    this._htmlElement = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
  }
  get isFocus(): boolean {
    return this._isFocus;
  }

  set isFocus(value: boolean) {
    this._isFocus = value;
  }
  public createHtmlElement(): HTMLDivElement {
    let htmlElement = document.createElement(
      InputBlock.HTML_ELEMENT_TYPE
    ) as HTMLDivElement;
    htmlElement = this.fillClassHtmlElement(htmlElement);
    htmlElement = this.fillStyleHtmlElement(htmlElement);
    return htmlElement;
  }

  public fillStyleHtmlElement(elem: HTMLDivElement): HTMLDivElement {
    elem.style.width = String(this._width) + "px";
    elem.style.color = InputBlock.DEFAULT_STYLE_COLOR;
    elem.style.fontSize = String(InputBlock.DEFAULT_STYLE_FONT_SIZE) + "px";
    elem.style.fontWeight = String(InputBlock.DEFAULT_STYLE_FONT_WEIGHT);
    elem.style.fontFamily = InputBlock.DEFAULT_STYLE_FONT_FAMILY;
    elem.style.border = InputBlock.DEFAULT_STYLE_BORDER;
    elem.style.borderColor = InputBlock.DEFAULT_STYLE_BORDER_COLOR;
    elem.style.backgroundColor = InputBlock.DEFAULT_STYLE_BACKGROUND_COLOR;
    return elem;
  }

  public fillClassHtmlElement(elem: HTMLDivElement): HTMLDivElement {
    elem.className = this._className;
    return elem;
  }
}
