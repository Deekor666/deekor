import { BaseHtmlElement } from "@/models/BaseModels/BaseHtmlElement";

export class BaseServerNameInPathConsole extends BaseHtmlElement {
  public static DEFAULT_CLASSNAME = "console-base-servername";
  public static DEFAULT_TEXT_COLOR = "chartreuse";
  public static DEFAULT_TEXT = "DEEKOR_TEST";
  private _textColor: string;
  private _text: string;

  constructor(htmlElement: HTMLElement | string) {
    if (htmlElement instanceof HTMLElement) {
      super(htmlElement);
    } else {
      super(htmlElement);
    }
    this._textColor = BaseServerNameInPathConsole.DEFAULT_TEXT_COLOR;
    this.textColor = BaseServerNameInPathConsole.DEFAULT_TEXT_COLOR;
    this._text = BaseServerNameInPathConsole.DEFAULT_TEXT;
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
}
