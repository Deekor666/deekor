import { BaseHtmlElement } from "@/models/BaseModels/BaseHtmlElement";

export class PathLastSymbol extends BaseHtmlElement {
  private _textColor: string;
  private _symbol: string;

  constructor(htmlElement: HTMLElement | string) {
    if (htmlElement instanceof HTMLElement) {
      super(htmlElement);
    } else {
      super(htmlElement);
    }
    this._textColor = PathLastSymbol.DEFAULT_TEXT_COLOR;
    this.textColor = PathLastSymbol.DEFAULT_TEXT_COLOR;
    this._symbol = this.htmlElement.innerText;
    this.symbol = this.htmlElement.innerText;
  }

  get symbol(): string {
    return this._symbol;
  }

  set symbol(value: string) {
    this._symbol = value;
    this.htmlElement.innerText = value;
  }

  set textColor(value: string) {
    this._textColor = value;
    this.htmlElement.style.color = value;
  }

  public static DEFAULT_CLASSNAME = "console-base-dollar";
  public static DEFAULT_TEXT_COLOR = "rgb(167, 166, 166)";
  public static DEFAULT_SYMBOL = "$";
}
