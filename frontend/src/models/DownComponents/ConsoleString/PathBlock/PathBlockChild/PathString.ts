import { BaseHtmlElement } from "@/models/BaseModels/BaseHtmlElement";

export class PathString extends BaseHtmlElement {
  protected _textColor: string;
  private _text: string;

  constructor(htmlElement: HTMLElement | string) {
    if (htmlElement instanceof HTMLElement) {
      super(htmlElement);
    } else {
      super(htmlElement);
    }
    this._textColor = PathString.DEFAULT_TEXT_COLOR;
    this.textColor = PathString.DEFAULT_TEXT_COLOR;
    this._text = this.htmlElement.innerText;
    this.text = this.htmlElement.innerText;
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

  public static DEFAULT_CLASSNAME = "base-path-string";
  public static DEFAULT_ELEMENT_TYPE = "span";
  public static DEFAULT_TEXT_COLOR = "cyan";
  public static DEFAULT_TEXT = "~/";
}
