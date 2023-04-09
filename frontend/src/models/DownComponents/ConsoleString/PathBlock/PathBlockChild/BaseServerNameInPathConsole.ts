import { BaseSpanElement } from "@/models/BaseModels/BaseSpanElement";

export class BaseServerNameInPathConsole extends BaseSpanElement {
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
    this._text = BaseServerNameInPathConsole.DEFAULT_TEXT;

    this.fillStyleHtmlElement();
  }
  public fillStyleHtmlElement() {
    this.textColor = this._textColor;
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
