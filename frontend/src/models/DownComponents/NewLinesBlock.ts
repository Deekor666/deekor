import { ConsoleString } from "@/models/DownComponents/ConsoleString/ConsoleString";

export class NewLinesBlock {
  private _childList = [] as ConsoleString[];
  private readonly _htmlElement: HTMLDivElement;

  constructor(htmlElement: HTMLDivElement) {
    this._htmlElement = htmlElement;
  }

  public appendNewString(newString: ConsoleString): void {
    this.htmlElement.append(newString.htmlElement);
    this._childList.push(newString);
  }

  public clearAllStrings(): void {
    this._childList.forEach((consoleString: ConsoleString) => {
      consoleString.htmlElement.remove();
    });
    this._childList = [];
  }

  public linesListIsFull(): boolean {
    return (
      this._childList.length > NewLinesBlock.COUNT_CONSOLE_STRINGS_IN_BLOCK - 2
    );
  }

  public removeLastLineInLinesBlock(): void {
    const firstElem = this._childList.shift();
    firstElem?.htmlElement.remove();
  }

  get htmlElement(): HTMLDivElement {
    return this._htmlElement;
  }

  get childList(): ConsoleString[] {
    return this._childList;
  }

  public static COUNT_CONSOLE_STRINGS_IN_BLOCK = 10;
  public static DEFAULT_CLASSNAME = "new-lines-block";
}
