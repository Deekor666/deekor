export class Blink {
  get onBlink(): boolean {
    return this._onBlink;
  }

  set onBlink(value: boolean) {
    this._onBlink = value;
  }
  public static DEFAULT_WIDTH = 10;
  public static DEFAULT_HEIGHT = 26;
  public static DEFAULT_LEFT = 320;
  public static DEFAULT_BOTTOM = 3;
  public static DEFAULT_CLASSNAME = "blink-default";
  public static DEFAULT_POSITION = "absolute";
  public static ON_BLINK_BACKGROUND = "#fff";
  public static ON_BLINK_OPACITY = 1;
  public static ON_BLINK_Z_INDEX = 5;
  public static ON_BLINK_ANIMATION = "blink_ani 0.5s infinite";
  private _htmlElementType = "div";
  private _htmlElement: HTMLDivElement;
  private _className: string;
  private _width: number;
  private _height: number;
  private _left: number;
  private _bottom: number;
  private _position: string;
  private _transform: string;
  private _onBlink = false;

  constructor(htmlElement: HTMLDivElement) {
    this._htmlElement = htmlElement;
    this._className = Blink.DEFAULT_CLASSNAME;
    this._width = Blink.DEFAULT_WIDTH;
    this._position = Blink.DEFAULT_POSITION;
    this._height = Blink.DEFAULT_HEIGHT;
    this._left = Blink.DEFAULT_LEFT;
    this._bottom = Blink.DEFAULT_BOTTOM;
    this._htmlElement.style.position = Blink.DEFAULT_POSITION;
    this._htmlElement.style.bottom = String(Blink.DEFAULT_BOTTOM) + "px";
    this._transform = "";
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
  }

  get htmlElementType(): string {
    return this._htmlElementType;
  }

  set htmlElementType(value: string) {
    this._htmlElementType = value;
  }

  get htmlElement(): HTMLDivElement {
    return this._htmlElement;
  }

  set htmlElement(value: HTMLDivElement) {
    this._htmlElement = value;
  }

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
    this._htmlElement.className = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get left(): number {
    return this._left;
  }

  set left(value: number) {
    this._left = value;
    this._htmlElement.style.left = String(value) + "px";
  }

  get transform(): string {
    return this._transform;
  }

  set transform(value: string) {
    this._transform = value;
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
    elem.style.width = String(this._width) + "px";
    elem.style.height = String(this._height) + "px";
    return elem;
  }

  public fillClassHtmlElement(elem: HTMLDivElement): HTMLDivElement {
    elem.className = this._className;
    return elem;
  }

  public setNewTransform(inputCountSymbols: number, symbolLength = 12) {
    this._transform =
      "translateX(" + (inputCountSymbols * symbolLength).toString() + "px)";
    this._htmlElement.style.transform = this._transform;
  }

  public onBlinkOn() {
    this._htmlElement.style.background = Blink.ON_BLINK_BACKGROUND;
    this._htmlElement.style.opacity = String(Blink.ON_BLINK_OPACITY);
    this._htmlElement.style.zIndex = String(Blink.ON_BLINK_Z_INDEX);
    this._htmlElement.style.animation = Blink.ON_BLINK_ANIMATION;
  }

  public offBlinkOff() {
    this._htmlElement.style.background = "";
    this._htmlElement.style.opacity = "";
    this._htmlElement.style.zIndex = "";
    this._htmlElement.style.animation = "";
  }
  public setAttributeInDivElement(attrName: string, attrValue: string) {
    this.htmlElement.setAttribute(attrName, attrValue);
  }
  setDefaultSettingsBlink(consolePathWidth: string): void {
    this.htmlElement.style.left = consolePathWidth + "px";
    this.htmlElement.style.transform = "";
  }
}
