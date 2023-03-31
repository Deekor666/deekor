import { BaseServerNameInPathConsole } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/BaseServerNameInPathConsole";
import { ColonInPath } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/ColonInPath";
import { PathString } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/PathString";
import { Global } from "@/global";

export class PathBlock {
  public static DEFAULT_ID = "path-block";
  public static DEFAULT_CLASSNAME = "console-path";
  private _htmlElementType = "div";
  private _childBlocks = [] as HTMLElement[];
  private _className: string;
  private _baseServerNameInPathConsole: BaseServerNameInPathConsole;
  private _colonInPath: ColonInPath;
  private _pathString: PathString;
  private _htmlElement: HTMLDivElement;
  private _width: number;

  constructor(htmlElement: HTMLDivElement) {
    if (htmlElement === null) {
      this._htmlElement = this.createHtmlElement();
    } else {
      this._htmlElement = htmlElement;
    }
    this._className = PathBlock.DEFAULT_CLASSNAME;
    this._width = Number(this._htmlElement.style.width);

    this._baseServerNameInPathConsole =
      this.createBaseServerNameInPathConsole();
    this._colonInPath = this.createColonInPath();
    this._pathString = this.createPathString();

    this._childBlocks.push(this.baseServerNameInPathConsole.htmlElement);
    this._childBlocks.push(this.colonInPath.htmlElement);
    this._childBlocks.push(this.pathString.htmlElement);
  }
  private createPathString(): PathString {
    return new PathString(
      this.htmlElement.getElementsByClassName(
        "console-base-path-string"
      )[0] as HTMLSpanElement
    );
  }
  private createColonInPath(): ColonInPath {
    return new ColonInPath(
      this.htmlElement.getElementsByClassName(
        "console-base-colon"
      )[0] as HTMLSpanElement
    );
  }
  private createBaseServerNameInPathConsole(): BaseServerNameInPathConsole {
    return new BaseServerNameInPathConsole(
      this.htmlElement.getElementsByClassName(
        "console-base-servername"
      )[0] as HTMLSpanElement
    );
  }
  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get htmlElementType(): string {
    return this._htmlElementType;
  }
  get childBlocks(): HTMLElement[] {
    return this._childBlocks;
  }

  set childBlocks(value: HTMLElement[]) {
    this._childBlocks = value;
  }
  get htmlElement(): HTMLDivElement {
    return this._htmlElement;
  }

  set htmlElement(value: HTMLDivElement) {
    this._htmlElement = value;
  }

  get pathString(): PathString {
    return this._pathString;
  }

  set pathString(value: PathString) {
    this._pathString = value;
  }

  get colonInPath(): ColonInPath {
    return this._colonInPath;
  }

  set colonInPath(value: ColonInPath) {
    this._colonInPath = value;
  }

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
  }

  get baseServerNameInPathConsole(): BaseServerNameInPathConsole {
    return this._baseServerNameInPathConsole;
  }

  set baseServerNameInPathConsole(value: BaseServerNameInPathConsole) {
    this._baseServerNameInPathConsole = value;
  }
  public createHtmlElement(): HTMLDivElement {
    const htmlElement = document.createElement(
      this.htmlElementType
    ) as HTMLDivElement;
    this.fillClassHtmlElement(htmlElement);
    this.fillStyleHtmlElement(htmlElement);
    return htmlElement;
  }
  public fillStyleHtmlElement(elem: HTMLDivElement) {
    elem.style.width = String(this._width) + Global.PX;
  }

  public fillClassHtmlElement(elem: HTMLDivElement) {
    elem.className = this._className;
    return elem;
  }
  public fillConsoleStrings() {
    this.childBlocks.forEach((block) => {
      this.fillChildHtmlElement(block);
    });
  }
  public fillChildHtmlElement(elem: HTMLElement) {
    this._htmlElement.append(elem);
  }
}
