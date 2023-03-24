import { ConsoleString } from "@/models/DownComponents/ConsoleString/ConsoleString";

export class ConsoleComponent {
  public static DEFAULT_CLASSNAME = "main-console-block";
  public static DEFAULT_STYLE_DISPLAY = "flex";
  public static DEFAULT_STYLE_JUSTIFY_CONTENT = "flex-end";
  public static DEFAULT_STYLE_FLEX_DIRECTION = "column";
  public static DEFAULT_STYLE_ALIGN_ITEMS = "end";
  private _htmlElementType = "div";
  private _consoleStrings: ConsoleString[] = [];
  private _width: number;
  private _height: number;
  private _className: string;
  private _htmlElement: HTMLDivElement;

  constructor(consoleStrings: ConsoleString[], width: number, height: number) {
    this._consoleStrings = consoleStrings;
    this._width = width;
    this._height = height;
    this._className = ConsoleComponent.DEFAULT_CLASSNAME;
    this._htmlElement = this.createHtmlElement();
    this.fillConsoleStrings();
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
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get consoleStrings(): ConsoleString[] {
    return this._consoleStrings;
  }

  set consoleStrings(value: ConsoleString[]) {
    this._consoleStrings = value;
  }

  public addClassName(value: string) {
    this._className = this._className + ` ${value}`;
  }

  get htmlElementType(): string {
    return this._htmlElementType;
  }

  set htmlElementType(value: string) {
    this._htmlElementType = value;
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
    elem.style.display = ConsoleComponent.DEFAULT_STYLE_DISPLAY;
    elem.style.justifyContent = ConsoleComponent.DEFAULT_STYLE_JUSTIFY_CONTENT;
    elem.style.flexDirection = ConsoleComponent.DEFAULT_STYLE_FLEX_DIRECTION;
    elem.style.alignItems = ConsoleComponent.DEFAULT_STYLE_ALIGN_ITEMS;
    return elem;
  }

  public fillClassHtmlElement(elem: HTMLDivElement): HTMLDivElement {
    elem.className = this._className;
    return elem;
  }

  public fillChildHtmlElement(elem: HTMLElement) {
    this._htmlElement.append(elem);
  }

  public fillConsoleStrings() {
    this.consoleStrings.forEach((consoleString: ConsoleString) => {
      this.fillChildHtmlElement(consoleString.htmlElement);
    });
  }
}
