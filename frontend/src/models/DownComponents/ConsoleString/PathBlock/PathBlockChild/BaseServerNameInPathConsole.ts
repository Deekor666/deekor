export class BaseServerNameInPathConsole {
  public static DEFAULT_CLASSNAME = "server";
  public static DEFAULT_TEXT_COLOR = "chartreuse";
  private _htmlElementType = "span";
  private _htmlElement: HTMLElement;
  private _className: string;
  private _textColor: string;
  private _text: string;
  constructor(text: string) {
    this._className = BaseServerNameInPathConsole.DEFAULT_CLASSNAME;
    this._textColor = BaseServerNameInPathConsole.DEFAULT_TEXT_COLOR;
    this._text = text;
    this._htmlElement = this.createHtmlElement();
    this.fillTextInHtmlElement(this.text);
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