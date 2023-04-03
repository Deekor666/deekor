import { ConsoleString } from "@/models/DownComponents/ConsoleString/ConsoleString";

export class NewLinesBlock {
  private _childList = [] as ConsoleString[];
  private _htmlElement: HTMLDivElement;

  constructor() {
    this._htmlElement = document.getElementById(
      NewLinesBlock.DEFAULT_CLASSNAME
    ) as HTMLDivElement;
  }

  get childBlocks(): ConsoleString[] {
    return this._childList;
  }

  set childBlocks(value: ConsoleString[]) {
    this._childList = value;
  }

  public appendNewString(newString: ConsoleString) {
    this.htmlElement.append(newString.htmlElement);
    this.childBlocks.push(newString);
  }

  public clearAllStrings(): void {
    this.childBlocks.forEach((consoleString: ConsoleString) => {
      consoleString.htmlElement.remove();
    });
    this.childBlocks = [];
  }

  public linesListIsFull(): boolean {
    return (
      this.childBlocks.length > NewLinesBlock.COUNT_CONSOLE_STRINGS_IN_BLOCK - 2
    );
  }

  public removeLineInLinesBlock(): void {
    const firstElem = this.childBlocks.shift();
    firstElem?.htmlElement.remove();
  }

  get htmlElement(): HTMLDivElement {
    return this._htmlElement;
  }

  set htmlElement(value: HTMLDivElement) {
    this._htmlElement = value;
  }

  public static COUNT_CONSOLE_STRINGS_IN_BLOCK = 10;
  public static DEFAULT_CLASSNAME = "new-lines-block";
}
