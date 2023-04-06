import { BaseServerNameInPathConsole } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/BaseServerNameInPathConsole";
import { ColonInPath } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/ColonInPath";
import { PathString } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/PathString";
import { BaseHtmlElement } from "@/models/BaseModels/BaseHtmlElement";
import { PathLastSymbol } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/PathLastSymbol";

export class PathBlock extends BaseHtmlElement {
  private _baseServerNameInPathConsole: BaseServerNameInPathConsole;
  private _colonInPath: ColonInPath;
  private _pathString: PathString;
  private _pathLastSymbol: PathLastSymbol;

  constructor(
    htmlElement: HTMLElement | string,
    width: number,
    height: number,
    className?: string,
    pathLastSymbol?: PathLastSymbol,
    pathString?: PathString,
    colonInPath?: ColonInPath,
    baseServerNameInPathConsole?: BaseServerNameInPathConsole
  ) {
    if (htmlElement instanceof HTMLElement) {
      super(htmlElement, width, height, className);
    } else {
      super(htmlElement, width, height, className);
    }

    if (htmlElement instanceof HTMLElement) {
      this._baseServerNameInPathConsole =
        this.createBaseServerNameInPathConsole();
      this._colonInPath = this.createColonInPath();
      this._pathString = this.createPathString();
      this._pathLastSymbol = this.createPathLastSymbol();

      this.childList.push(this.baseServerNameInPathConsole.htmlElement);
      this.childList.push(this.colonInPath.htmlElement);
      this.childList.push(this.pathString.htmlElement);
    } else {
      this._baseServerNameInPathConsole =
        baseServerNameInPathConsole as BaseServerNameInPathConsole;
      this._colonInPath = colonInPath as ColonInPath;
      this._pathString = pathString as PathString;
      this._pathLastSymbol = pathLastSymbol as PathLastSymbol;
    }
    this.fillStyleHtmlElement();
  }

  public fillStyleHtmlElement() {
    this.htmlElement.style.display = PathBlock.DEFAULT_STYLE_DISPLAY;
    this.htmlElement.style.alignItems = PathBlock.DEFAULT_STYLE_ALIGN_ITEMS;
  }

  private createPathString(): PathString {
    const elem: HTMLSpanElement = this.htmlElement.getElementsByClassName(
      PathString.DEFAULT_CLASSNAME
    )[0] as HTMLSpanElement;
    return new PathString(elem, elem.offsetWidth, elem.offsetHeight);
  }
  private createPathLastSymbol(): PathLastSymbol {
    const elem: HTMLSpanElement = this.htmlElement.getElementsByClassName(
      PathLastSymbol.DEFAULT_CLASSNAME
    )[0] as HTMLSpanElement;
    return new PathLastSymbol(elem, elem.offsetWidth, elem.offsetHeight);
  }
  private createColonInPath(): ColonInPath {
    const elem: HTMLSpanElement = this.htmlElement.getElementsByClassName(
      ColonInPath.DEFAULT_CLASSNAME
    )[0] as HTMLSpanElement;
    return new ColonInPath(elem, elem.offsetWidth, elem.offsetHeight);
  }
  private createBaseServerNameInPathConsole(): BaseServerNameInPathConsole {
    const elem: HTMLSpanElement = this.htmlElement.getElementsByClassName(
      BaseServerNameInPathConsole.DEFAULT_CLASSNAME
    )[0] as HTMLSpanElement;
    return new BaseServerNameInPathConsole(
      elem,
      elem.offsetWidth,
      elem.offsetHeight
    );
  }

  get pathLastSymbol(): PathLastSymbol {
    return this._pathLastSymbol;
  }

  set pathLastSymbol(value: PathLastSymbol) {
    this._pathLastSymbol = value;
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

  get baseServerNameInPathConsole(): BaseServerNameInPathConsole {
    return this._baseServerNameInPathConsole;
  }

  set baseServerNameInPathConsole(value: BaseServerNameInPathConsole) {
    this._baseServerNameInPathConsole = value;
  }

  public static DEFAULT_ID = "path-block";
  public static DEFAULT_CLASSNAME = "console-path";
  public static DEFAULT_STYLE_DISPLAY = "flex";
  public static DEFAULT_STYLE_ALIGN_ITEMS = "center";
}
