import { MathUtils, PerspectiveCamera } from "three";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";

export class DefaultCamera {
  private readonly _object: PerspectiveCamera;
  private _fov: number;
  private _aspect: number;
  private _near: number;
  private _far: number;
  private _rotation: DefaultRotation;
  private _scale: DefaultScale;
  private _position: DefaultPosition;

  constructor(aspect: number) {
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
    this._rotation = DefaultCamera._DEFAULT_CAMERA_ROTATION;
    this.setRotation(this._rotation);

    this._position = DefaultCamera._DEFAULT_CAMERA_POSITION;
    this.setPosition(this._position);

    this._scale = DefaultCamera._DEFAULT_CAMERA_SCALE;
    this.setScale(this._scale);
  }

  public animation(delta: number) {
    // increase the cube's rotation each frame
    const radiansPerSecond = MathUtils.degToRad(1);
    this.object.rotation.x -= radiansPerSecond * delta;
    this.object.rotation.y += radiansPerSecond * delta;
    this.object.position.x += 0.01;
    this.object.position.y += 0.01;
    this.object.position.z += 0.01;
  }

  public setPosition(position: DefaultPosition) {
    this._position = position;
    this._object.position.set(
      this._position.x,
      this._position.y,
      this._position.z
    );
  }

  public setScale(value: DefaultScale) {
    this._scale = value;
    this._object.scale.set(this._scale.x, this._scale.y, this._scale.z);
  }

  public setRotation(rotation: DefaultRotation) {
    this._rotation = rotation;
    this._object.rotation.set(
      this._rotation.x,
      this._rotation.y,
      this._rotation.z
    );
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
  private static _DEFAULT_CAMERA_POSITION = new DefaultPosition(0, 0, 0);
  private static _DEFAULT_CAMERA_ROTATION = new DefaultRotation(0, 0, 0);
  private static _DEFAULT_CAMERA_SCALE = new DefaultScale(0, 0, 0);
}
