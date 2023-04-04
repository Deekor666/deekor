import { PerspectiveCamera } from "three";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";

export class DefaultCamera {
  private readonly _object: PerspectiveCamera;
  private _fov: number;
  private _aspect: number;
  private _near: number;
  private _far: number;
  private _position: DefaultPosition;

  constructor(aspect: number, position: DefaultPosition) {
    this._fov = DefaultCamera.DEFAULT_FOV;
    this._aspect = aspect;
    this._near = DefaultCamera.DEFAULT_NEAR;
    this._far = DefaultCamera.DEFAULT_FAR;

    this._object = new PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );

    this._position = position;
    this.setPosition();
  }
  private setPosition() {
    this.object.position.set(this.position.x, this.position.y, this.position.z);
  }
  get object(): PerspectiveCamera {
    return this._object;
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

  get position(): DefaultPosition {
    return this._position;
  }

  set position(point: DefaultPosition) {
    this._position = point;
    this.object.position.set(point.x, point.y, point.z);
  }

  public static DEFAULT_FOV = 35;
  public static DEFAULT_NEAR = 0.1;
  public static DEFAULT_FAR = 100;
}
