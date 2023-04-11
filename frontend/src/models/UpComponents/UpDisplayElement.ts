import { Global } from "@/global";
import { DefaultScene } from "@/models/UpComponents/ThreeJsModels/Scenes/DefaultScene";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { BaseScene } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseScene";

export class UpDisplayElement {
  private _width: number;
  private _height: number;
  private _className: string;
  private _htmlElementType: string;
  private _childList: HTMLElement[];
  private readonly _htmlElement: HTMLDivElement;
  private _scene: BaseScene | null;

  constructor(htmlElement: HTMLDivElement) {
    this._htmlElement = htmlElement;
    this._width = this._htmlElement.offsetWidth;
    this._height = this._htmlElement.offsetHeight;
    this._className = this._htmlElement.className;
    this._childList = [];
    this._htmlElementType = "";
    this._scene = null;
    this.setDefaultParams();
  }

  public playScene(command: string): BaseScene | null {
    let commandObject = null;
    if (command === "new scene") {
      // заготовка под новую сцену
      this.clearUpDisplay();
      commandObject = new DefaultScene(
        this.htmlElement,
        this.width,
        this.height
      );
    }
    if (command === "default") {
      this.clearUpDisplay();
      commandObject = new DefaultScene(
        this.htmlElement,
        this.width,
        this.height
      );
    }
    if (commandObject !== null) {
      commandObject.start();
    }
    this.scene = commandObject;
    return commandObject;
  }

  public playCommand(command: string, storeScene: BaseScene) {
    if (command === "clear all") {
      this.clearUpDisplay();
    }

    if (storeScene !== null) {
      if (command === "orbit off") {
        storeScene.offOrbitControl();
        storeScene.render();
      }
      if (command === "orbit on") {
        storeScene.onOrbitControl();
        storeScene.render();
      }
      if (command === "axes off") {
        storeScene.offAxes();
        storeScene.render();
      }
      if (command === "axes on") {
        storeScene.onAxes();
        storeScene.render();
      }
      if (command === "left") {
        if (storeScene.figures.length > 0) {
          const figure = storeScene.figures[0];
          const position = figure.getPosition();
          figure.setPosition(
            new DefaultPosition(position.x - 1, position.y, position.z)
          );
          storeScene.render();
        }
      }
      if (command === "right") {
        if (storeScene.figures.length > 0) {
          const figure = storeScene.figures[0];
          const position = figure.getPosition();
          figure.setPosition(
            new DefaultPosition(position.x + 1, position.y, position.z)
          );
        }
        storeScene.render();
      }
      if (command === "up") {
        if (storeScene.figures.length > 0) {
          const figure = storeScene.figures[0];
          const position = figure.getPosition();
          figure.setPosition(
            new DefaultPosition(position.x, position.y + 1, position.z)
          );
        }
        storeScene.render();
      }
      if (command === "down") {
        if (storeScene.figures.length > 0) {
          const figure = storeScene.figures[0];
          const position = figure.getPosition();
          figure.setPosition(
            new DefaultPosition(position.x, position.y - 1, position.z)
          );
        }
        storeScene.render();
      }
    }
  }

  private clearUpDisplay(): void {
    while (this.htmlElement.firstChild) {
      this.htmlElement.removeChild(this.htmlElement.firstChild);
    }

    this.htmlElement;
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

  get scene(): BaseScene | null {
    return this._scene;
  }

  set scene(value: BaseScene | null) {
    this._scene = value;
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
