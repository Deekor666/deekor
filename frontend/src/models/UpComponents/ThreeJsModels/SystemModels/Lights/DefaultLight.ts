import { Color, ColorRepresentation, DirectionalLight } from "three";
import { Point } from "@/models/UpComponents/ThreeJsModels/SystemModels/Point";

export class DefaultLight {
  private _position: Point;
  private _intensity: number;
  private _object: DirectionalLight;
  private _color: ColorRepresentation;

  constructor() {
    this._object = new DirectionalLight(
      DefaultLight.DEFAULT_COLOR,
      DefaultLight.DEFAULT_INTENSITY
    );
    this._position = DefaultLight.DEFAULT_POSITION;
    this._intensity = DefaultLight.DEFAULT_INTENSITY;
    this._color = DefaultLight.DEFAULT_COLOR;
  }

  get position(): Point {
    return this._position;
  }

  set position(point: Point) {
    this._position = point;
    this.object.position.set(point.x, point.y, point.z);
  }

  get intensity() {
    return this._intensity;
  }

  set intensity(value) {
    this._intensity = value;
  }

  get object(): DirectionalLight {
    return this._object;
  }

  set object(value: DirectionalLight) {
    this._object = value;
  }

  get color(): ColorRepresentation {
    return this._color;
  }

  set color(value: string | ColorRepresentation) {
    this._color = value as ColorRepresentation;
    this.object.color = new Color(value as ColorRepresentation);
  }

  public static DEFAULT_COLOR = "white" as ColorRepresentation;
  public static DEFAULT_INTENSITY = 8;
  public static DEFAULT_POSITION = new Point(0, 10, 0);
}
