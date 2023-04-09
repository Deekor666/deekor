import { Global } from "@/global";
import { BaseHtmlElement } from "@/models/BaseModels/BaseHtmlElement";

export class Blink extends BaseHtmlElement {
  private _left: number;
  private _bottom: number;
  private _position: string;
  private _transform: string;

  constructor(
    htmlElement: HTMLElement | string,
    width: number,
    height: number
  ) {
    if (htmlElement instanceof HTMLElement) {
      super(htmlElement, width, height);
    } else {
      super(htmlElement, width, height);
    }

    this._position = Blink.DEFAULT_POSITION;
    this._left = Blink.DEFAULT_LEFT;
    this._bottom = Blink.DEFAULT_BOTTOM;
    this._transform = "";
    this.fillStyleHtmlElement();
  }

  public fillStyleHtmlElement() {
    this.htmlElement.style.position = this._position;
    this.htmlElement.style.left = String(this._left) + Global.PX;
    this.htmlElement.style.bottom = String(this._bottom) + Global.PX;
    this.htmlElement.style.transform = this._transform;
    this._transform = "";
  }

  public setNewTransform(
    inputCountSymbols: number,
    symbolLength = Global.WIDTH_ONE_SYMBOL
  ) {
    this.transform =
      "translateX(" + (inputCountSymbols * symbolLength).toString() + "px)";
    this._htmlElement.style.transform = this._transform;
  }

  public onBlink() {
    this.className = Blink.DEFAULT_CLASSNAME_ON_BLINK;
  }

  public offBlink() {
    this.className = "";
  }
  setDefaultSettingsBlink(): void {
    this.htmlElement.style.left = this._left + Global.PX;
    this.htmlElement.style.transform = "";
  }

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get bottom(): number {
    return this._bottom;
  }

  set bottom(value: number) {
    this._bottom = value;
    this.htmlElement.style.bottom = String(value) + Global.PX;
  }

  get left(): number {
    return this._left;
  }

  set left(value: number) {
    this._left = value;
    this._htmlElement.style.left = String(value) + Global.PX;
  }

  get transform(): string {
    return this._transform;
  }

  set transform(value: string) {
    this._transform = value;
    this.htmlElement.style.transform = value;
  }

  public static DEFAULT_WIDTH = 10;
  public static DEFAULT_HEIGHT = 26;
  public static DEFAULT_LEFT = 320;
  public static DEFAULT_BOTTOM = 3;
  public static DEFAULT_CLASSNAME = "blink-default";
  public static DEFAULT_CLASSNAME_ON_BLINK = "blink-working";
  public static DEFAULT_POSITION = "absolute";
  public static DEFAULT_ELEMENT_TYPE = "div";
  public static ON_BLINK_BACKGROUND = "#fff";
  public static ON_BLINK_OPACITY = 1;
  public static ON_BLINK_Z_INDEX = 5;
  public static ON_BLINK_ANIMATION = "blink_ani 0.5s infinite";
}
