import { PerspectiveCamera } from "three";
import { Point } from "@/models/UpComponents/ThreeJsModels/SystemModels/Point";

export class DefaultCamera {
  private readonly _camera: PerspectiveCamera;
  private _fov: number;
  private _aspect: number;
  private _near: number;
  private _far: number;
  private _position: Point;

  constructor(aspect: number, position: Point) {
    this._fov = DefaultCamera.DEFAULT_FOV;
    this._aspect = 1;
    this._near = DefaultCamera.DEFAULT_NEAR;
    this._far = DefaultCamera.DEFAULT_FAR;

    this._camera = new PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );

    this._position = position;
    this.setPosition();
  }

  private setPosition() {
    this.camera.position.set(this.position.x, this.position.y, this.position.z);
  }
  get camera(): PerspectiveCamera {
    return this._camera;
  }

  get fov(): number {
    return this._fov;
  }

  set fov(value: number) {
    this._fov = value;
  }

  get aspect(): number {
    return this._aspect;
  }

  set aspect(value: number) {
    this._aspect = value;
  }

  get near(): number {
    return this._near;
  }

  set near(value: number) {
    this._near = value;
  }

  get far(): number {
    return this._far;
  }

  set far(value: number) {
    this._far = value;
  }

  get position(): Point {
    return this._position;
  }

  set position(value: Point) {
    this._position = value;
  }

  public static DEFAULT_FOV = 75;
  public static DEFAULT_NEAR = 0.1;
  public static DEFAULT_FAR = 1000;
}
