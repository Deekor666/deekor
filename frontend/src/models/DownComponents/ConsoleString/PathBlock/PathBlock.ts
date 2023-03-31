import { BaseServerNameInPathConsole } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/BaseServerNameInPathConsole";
import { ColonInPath } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/ColonInPath";
import { PathString } from "@/models/DownComponents/ConsoleString/PathBlock/PathBlockChild/PathString";
import { BaseHtmlElement } from "@/models/BaseModels/BaseHtmlElement";

export class PathBlock extends BaseHtmlElement {
  public static DEFAULT_ID = "path-block";
  public static DEFAULT_CLASSNAME = "console-path";
  private _baseServerNameInPathConsole: BaseServerNameInPathConsole;
  private _colonInPath: ColonInPath;
  private _pathString: PathString;

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

    this.childList.push(this.baseServerNameInPathConsole.htmlElement);
    this.childList.push(this.colonInPath.htmlElement);
    this.childList.push(this.pathString.htmlElement);
  }
  private createPathString(): PathString {
    return new PathString(
      this.htmlElement.getElementsByClassName(
        PathString.DEFAULT_CLASSNAME
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
}
