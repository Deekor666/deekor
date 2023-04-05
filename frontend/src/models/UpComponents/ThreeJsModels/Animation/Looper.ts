import { Camera, Clock, Scene, WebGLRenderer } from "three";
import { BaseFigure } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseFigure";
import { BaseLight } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseLight";
import { DefaultCamera } from "@/models/UpComponents/ThreeJsModels/SystemModels/Camera/DefaultCamera";

export class Looper {
  private _camera: Camera;
  private _scene: Scene;
  private _renderer: WebGLRenderer;

  private _updates: [BaseFigure | BaseLight | DefaultCamera | null];
  private _clock: Clock;

  constructor(camera: Camera, scene: Scene, renderer: WebGLRenderer) {
    this._camera = camera;
    this._scene = scene;
    this._renderer = renderer;
    this._clock = new Clock();
    this._updates = [null];
  }

  public addFigureInUpdates(figure: BaseFigure | BaseLight | DefaultCamera) {
    this._updates.push(figure);
  }

  public start() {
    this._renderer.setAnimationLoop(() => {
      this.tick();
      this._renderer.render(this._scene, this._camera);
    });
  }

  public stop() {
    this._renderer.setAnimationLoop(null);
  }

  private tick() {
    const delta = this._clock.getDelta();
    for (const object of this._updates as [
      BaseFigure | BaseLight | DefaultCamera
    ]) {
      if (object !== null) {
        object.animation(delta);
      }
    }
  }
}
