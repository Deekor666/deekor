import { Global } from "@/global";
import { BaseHtmlElement } from "@/models/BaseModels/BaseHtmlElement";

export class InputBlock extends BaseHtmlElement {
  public static DEFAULT_ELEMENT_TYPE = "input";
  public static DEFAULT_CLASSNAME = "console-input";
  public static DEFAULT_STYLE_COLOR = "#fff";
  public static DEFAULT_STYLE_FONT_SIZE = 20;
  public static DEFAULT_STYLE_FONT_WEIGHT = 700;
  public static DEFAULT_STYLE_FONT_FAMILY = "monospace";
  public static DEFAULT_STYLE_BORDER = "none";
  public static DEFAULT_STYLE_BORDER_COLOR = "transparent";
  public static DEFAULT_STYLE_BACKGROUND_COLOR = "rgb(0, 0, 0)";
  private _isFocus = false;

  constructor(htmlElement: HTMLElement | string) {
    if (htmlElement instanceof HTMLElement) {
      super(htmlElement);
    } else {
      super(htmlElement);
    }
    this.fillStyleHtmlElement();
  }

  get isFocus(): boolean {
    return this._isFocus;
  }

  set isFocus(value: boolean) {
    this._isFocus = value;
  }

  public fillStyleHtmlElement() {
    this.htmlElement.style.color = InputBlock.DEFAULT_STYLE_COLOR;
    this.htmlElement.style.fontSize =
      String(InputBlock.DEFAULT_STYLE_FONT_SIZE) + Global.PX;
    this.htmlElement.style.fontWeight = String(
      InputBlock.DEFAULT_STYLE_FONT_WEIGHT
    );
    this.htmlElement.style.fontFamily = InputBlock.DEFAULT_STYLE_FONT_FAMILY;
    this.htmlElement.style.border = InputBlock.DEFAULT_STYLE_BORDER;
    this.htmlElement.style.borderColor = InputBlock.DEFAULT_STYLE_BORDER_COLOR;
    this.htmlElement.style.backgroundColor =
      InputBlock.DEFAULT_STYLE_BACKGROUND_COLOR;
  }
  get htmlElement(): HTMLInputElement {
    return this._htmlElement as HTMLInputElement;
  }
}
