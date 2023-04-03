import { Color, ColorRepresentation, Scene } from "three";

export class DefaultScene {
  private readonly _object: Scene;
  private _background: string;

  constructor() {
    this._object = new Scene();
    this._background = DefaultScene.DEFAULT_BACKGROUND;
    this.background = DefaultScene.DEFAULT_BACKGROUND;
  }

  get object(): Scene {
    return this._object;
  }

  get background(): string {
    return this._background;
  }

  set background(value: string) {
    this._background = value;
    this.object.background = new Color(value as ColorRepresentation);
  }

  public static DEFAULT_BACKGROUND = "black";
}
