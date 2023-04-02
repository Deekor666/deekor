import { Color, ColorRepresentation, Scene } from "three";

export class DefaultScene {
  private readonly _scene: Scene;
  private _background: string;

  constructor() {
    this._scene = new Scene();
    this._background = DefaultScene.DEFAULT_BACKGROUND;
    this.background = DefaultScene.DEFAULT_BACKGROUND;
  }

  get scene(): Scene {
    return this._scene;
  }

  get background(): string {
    return this._background;
  }

  set background(value: string) {
    this._background = value;
    this.scene.background = new Color(value as ColorRepresentation);
  }

  public static DEFAULT_BACKGROUND = "purple";
}
