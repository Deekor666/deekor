import { BaseHtmlElement } from "@/models/BaseModels/BaseHtmlElement";

export class BaseSpanElement extends BaseHtmlElement {
  private _fontFamily: string;
  private _fontWeight: string;

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
    this._fontFamily = BaseSpanElement.DEFAULT_SPAN_FONT_FAMILY;
    this._fontWeight = BaseSpanElement.DEFAULT_SPAN_FONT_WEIGHT;

    this.fillTextStyleElement();
  }
  public fillTextStyleElement() {
    this.fontFamily = this._fontFamily;
    this.fontWeight = this._fontWeight;
  }

  get fontFamily(): string {
    return this._fontFamily;
  }

  set fontFamily(value: string) {
    this._fontFamily = value;
    this.htmlElement.style.fontFamily = value;
  }

  get fontWeight(): string {
    return this._fontWeight;
  }

  set fontWeight(value: string) {
    this._fontWeight = value;
    this.htmlElement.style.fontWeight = value;
  }

  public static DEFAULT_SPAN_FONT_FAMILY = "monospace";
  public static DEFAULT_SPAN_FONT_WEIGHT = "700";
}
