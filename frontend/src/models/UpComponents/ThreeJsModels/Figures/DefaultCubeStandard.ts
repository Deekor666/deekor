import { Rotation } from "@/models/UpComponents/ThreeJsModels/SystemModels/Rotation";
import {
  BoxGeometry,
  Color,
  ColorRepresentation,
  Mesh,
  MeshStandardMaterial,
} from "three";
import { DefaultStandardMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultStandardMaterial";
import { DefaultBasicMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultBasicMaterial";
import * as THREE from "three";
import { Point } from "@/models/UpComponents/ThreeJsModels/SystemModels/Point";

export class DefaultCubeStandard {
  private _width: number;
  private _height: number;
  private _depth: number;
  private _rotation: Rotation;
  private _position: Point;
  private _geometry: BoxGeometry;
  private _material: DefaultStandardMaterial | DefaultBasicMaterial;
  private _object: Mesh;
  constructor() {
    this._width = DefaultCubeStandard.DEFAULT_WIDTH;
    this._height = DefaultCubeStandard.DEFAULT_HEIGHT;
    this._depth = DefaultCubeStandard.DEFAULT_DEPTH;
    this._rotation = DefaultCubeStandard.DEFAULT_ROTATION;
    this._position = DefaultCubeStandard.DEFAULT_POSITION;

    this._geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
    this._material = new DefaultStandardMaterial("white");
    this._object = new THREE.Mesh(this.geometry, this.material.material);
  }
  public setFigurePosition(point: Point): void {
    this.object.geometry.translate(point.x, point.y, point.z);
  }

  public setFigureColor(color: string): void {
    (this.object.material as MeshStandardMaterial).color = new Color(
      color as ColorRepresentation
    );
  }

  get rotation(): Rotation {
    return this._rotation;
  }

  set rotation(rotation: Rotation) {
    this._rotation = rotation;
    this.object.rotation.set(rotation.x, rotation.y, rotation.z);
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get depth(): number {
    return this._depth;
  }

  set depth(value: number) {
    this._depth = value;
  }

  get geometry(): BoxGeometry {
    return this._geometry;
  }

  set geometry(value: BoxGeometry) {
    this._geometry = value;
  }

  get material(): DefaultStandardMaterial | DefaultBasicMaterial {
    return this._material;
  }

  set material(value: DefaultStandardMaterial | DefaultBasicMaterial) {
    this._material = value;
  }

  get object(): Mesh {
    return this._object;
  }

  set object(value: Mesh) {
    this._object = value;
  }

  get position(): Point {
    return this._position;
  }

  set position(point: Point) {
    this._position = point;
    this.object.rotation.set(point.x, point.y, point.z);
  }

  public static DEFAULT_WIDTH = 2;
  public static DEFAULT_HEIGHT = 2;
  public static DEFAULT_DEPTH = 2;
  public static DEFAULT_ROTATION = new Rotation(-0.5, -0.1, 0.8);
  public static DEFAULT_POSITION = new Point(0, 0, 10);
}
