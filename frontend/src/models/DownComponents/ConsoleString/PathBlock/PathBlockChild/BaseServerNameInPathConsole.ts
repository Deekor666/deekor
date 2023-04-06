import { BaseHtmlElement } from "@/models/BaseModels/BaseHtmlElement";

export class BaseServerNameInPathConsole extends BaseHtmlElement {
  private _textColor: string;
  private _text: string;

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
    this._textColor = BaseServerNameInPathConsole.DEFAULT_TEXT_COLOR;
    this.textColor = BaseServerNameInPathConsole.DEFAULT_TEXT_COLOR;
    this._text = BaseServerNameInPathConsole.DEFAULT_TEXT;
    this.text = this._text;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
    this.htmlElement.innerText = value;
  }

  set textColor(value: string) {
    this._textColor = value;
    this.htmlElement.style.color = value;
  }

  public static DEFAULT_CLASSNAME = "console-base-servername";
  public static DEFAULT_TEXT_COLOR = "chartreuse";
  public static DEFAULT_TEXT = "DEEKOR_SERVER";
}
