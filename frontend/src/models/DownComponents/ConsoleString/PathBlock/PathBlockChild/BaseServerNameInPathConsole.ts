export class BaseServerNameInPathConsole {
  public static DEFAULT_CLASSNAME = "server";
  public static DEFAULT_TEXT_COLOR = "chartreuse";
  public static DEFAULT_TEXT = "DEEKOR_SERVER_NEW";
  private _htmlElementType = "span";
  private _htmlElement: HTMLSpanElement;
  private _className: string;
  private _textColor: string;
  private _text: string;
  private _width: number;

  constructor(htmlElement: HTMLSpanElement) {
    this._htmlElement = htmlElement;
    this._className = htmlElement.className;
    this._textColor = htmlElement.style.color;
    this._text = BaseServerNameInPathConsole.DEFAULT_TEXT;
    this._width = this._text.length * 12;
    this._htmlElement.style.width = String(this._width) + "px";
  }
  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
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

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this.htmlElement.innerText = value;
    this._text = value;
  }

  get textColor(): string {
    return this._textColor;
  }

  set textColor(value: string) {
    this._textColor = value;
  }

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
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
    elem.style.color = this._textColor;
    return elem;
  }

  public fillClassHtmlElement(elem: HTMLDivElement): HTMLDivElement {
    elem.className = this._className;
    return elem;
  }
  public fillTextInHtmlElement(text: string) {
    this._htmlElement.innerHTML = text;
  }
}
