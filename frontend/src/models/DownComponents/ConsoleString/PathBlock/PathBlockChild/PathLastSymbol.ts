import { BaseHtmlElement } from "@/models/BaseModels/BaseHtmlElement";

export class PathLastSymbol extends BaseHtmlElement {
  private _textColor: string;
  private _symbol: string;

  constructor(
    htmlElement: HTMLElement | string,
    width: number,
    height: number,
    className?: string
  ) {
    if (htmlElement instanceof HTMLElement) {
      super(htmlElement, width, height, className);
    } else {
      super(htmlElement, width, height, className);
    }
    this._textColor = PathLastSymbol.DEFAULT_TEXT_COLOR;
    this.textColor = PathLastSymbol.DEFAULT_TEXT_COLOR;
    this._symbol = PathLastSymbol.DEFAULT_SYMBOL;
    this.symbol = this._symbol;
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
