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

  constructor(htmlElement: HTMLElement | string) {
    if (htmlElement instanceof HTMLElement) {
      super(htmlElement);
    } else {
      super(htmlElement);
    }

    this._baseServerNameInPathConsole =
      this.createBaseServerNameInPathConsole();
    this._colonInPath = this.createColonInPath();
    this._pathString = this.createPathString();
    this._pathLastSymbol = this.createPathLastSymbol();

    this.childList.push(this.baseServerNameInPathConsole.htmlElement);
    this.childList.push(this.colonInPath.htmlElement);
    this.childList.push(this.pathString.htmlElement);
    this.fillStyleHtmlElement();
  }

  public fillStyleHtmlElement() {
    this.htmlElement.style.display = PathBlock.DEFAULT_STYLE_DISPLAY;
    this.htmlElement.style.alignItems = PathBlock.DEFAULT_STYLE_ALIGN_ITEMS;
  }

  private createPathString(): PathString {
    return new PathString(
      this.htmlElement.getElementsByClassName(
        PathString.DEFAULT_CLASSNAME
      )[0] as HTMLSpanElement
    );
  }
  private createPathLastSymbol(): PathLastSymbol {
    return new PathLastSymbol(
      this.htmlElement.getElementsByClassName(
        PathLastSymbol.DEFAULT_CLASSNAME
      )[0] as HTMLSpanElement
    );
  }
  private createColonInPath(): ColonInPath {
    return new ColonInPath(
      this.htmlElement.getElementsByClassName(
        ColonInPath.DEFAULT_CLASSNAME
      )[0] as HTMLSpanElement
    );
  }
  private createBaseServerNameInPathConsole(): BaseServerNameInPathConsole {
    return new BaseServerNameInPathConsole(
      this.htmlElement.getElementsByClassName(
        BaseServerNameInPathConsole.DEFAULT_CLASSNAME
      )[0] as HTMLSpanElement
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
