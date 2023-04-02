import { Global } from "@/global";
import { World } from "@/models/UpComponents/ThreeJsModels/Commands/World";

export class UpDisplayElement {
  private _width: number;
  private _height: number;
  private _className: string;
  private _htmlElementType: string;
  private _childList: HTMLElement[];
  private _htmlElement: HTMLDivElement;

  constructor(htmlElement: HTMLDivElement) {
    this._htmlElement = htmlElement;
    this._width = this._htmlElement.offsetWidth;
    this._height = this._htmlElement.offsetHeight;
    this._className = this._htmlElement.className;
    this._childList = [];
    this._htmlElementType = "";
    this.setDefaultParams();
  }

  public playCommand(command: string) {
    if (command === "world") {
      const world = new World(this.htmlElement, this.width, this.height);
      world.render();
    }
  }
  private setDefaultParams(): void {
    this.width = Number(this._htmlElement.offsetWidth);
    this.height = Number(this._htmlElement.offsetHeight);
  }
  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
    this.htmlElement.style.width = String(value) + Global.PX;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
    this.htmlElement.style.height = String(value) + Global.PX;
  }

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
    this.htmlElement.className = String(value);
  }

  set htmlElementType(value: string) {
    this._htmlElementType = value;
  }

  get childList(): HTMLElement[] {
    return this._childList;
  }

  set childList(value: HTMLElement[]) {
    this._childList = value;
  }

  get htmlElement(): HTMLDivElement {
    return this._htmlElement;
  }

  public static DEFAULT_ELEMENT_ID = "up-display-component";
  public static DEFAULT_ELEMENT_CLASS = "up-display-component";
}
