export class ColonInPath {
  public static DEFAULT_CLASSNAME = "colon-in-path";
  public static DEFAULT_TEXT_COLOR = "rgb(167, 166, 166)";
  public static DEFAULT_SYMBOL = ":";
  private _htmlElementType = "span";
  private _htmlElement: HTMLSpanElement;
  private _width: number;

  private _className: string;
  private _textColor: string;
  private _symbol: string;
  constructor(htmlElement: HTMLSpanElement) {
    this._htmlElement = htmlElement;
    this._className = htmlElement.className;
    this._width = htmlElement.offsetWidth;
    this._textColor = htmlElement.style.color;
    this._symbol = htmlElement.innerText;
  }
  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get symbol(): string {
    return this._symbol;
  }

  set symbol(value: string) {
    this._symbol = value;
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
