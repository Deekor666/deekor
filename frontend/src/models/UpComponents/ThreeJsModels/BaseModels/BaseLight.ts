import {
  Color,
  ColorRepresentation,
  DirectionalLight,
  PointLight,
  RectAreaLight,
  SpotLight,
} from "three";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";

export class BaseLight {
  private _position: DefaultPosition;
  private _intensity: number;
  private readonly _object:
    | DirectionalLight
    | PointLight
    | SpotLight
    | RectAreaLight;
  private _color: Color;

  constructor() {
    this._object = new DirectionalLight(
      BaseLight.DEFAULT_COLOR,
      BaseLight.DEFAULT_INTENSITY
    );
    this._position = BaseLight.DEFAULT_POSITION;
    this._intensity = BaseLight.DEFAULT_INTENSITY;
    this._color = BaseLight.DEFAULT_COLOR;
  }

  public animation(/*delta: number*/) {
    /*..*/
  }

  public setPosition(position: DefaultPosition) {
    this._position = position;
    this.object.position.set(
      this._position.x,
      this._position.y,
      this._position.z
    );
  }

  public setIntensity(intensity: number) {
    this._intensity = intensity;
    this._object.intensity = this._intensity;
  }

  public setColor(color: string) {
    this._color = new Color(color as ColorRepresentation);
    this.object.color = new Color(color as ColorRepresentation);
  }

  get position(): DefaultPosition {
    return this._position;
  }

  get intensity() {
    return this._intensity;
  }

  get object(): DirectionalLight | PointLight | SpotLight | RectAreaLight {
    return this._object;
  }

  public static DEFAULT_COLOR = new Color("white");
  public static DEFAULT_INTENSITY = 1;
  public static DEFAULT_POSITION = new DefaultPosition(0, 10, 0);
}
