import * as THREE from "three";
import {
  BoxGeometry,
  Color,
  ColorRepresentation,
  Mesh,
  MeshBasicMaterial,
} from "three";
import { Point } from "@/models/UpComponents/ThreeJsModels/SystemModels/Point";

export class DefaultCube {
  private _width: number;
  private _height: number;
  private _depth: number;
  private _geometry: BoxGeometry;
  private _material: MeshBasicMaterial;
  private _figure: Mesh;
  constructor() {
    this._width = DefaultCube.DEFAULT_WIDTH;
    this._height = DefaultCube.DEFAULT_HEIGHT;
    this._depth = DefaultCube.DEFAULT_DEPTH;
    this._geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
    this._material = new THREE.MeshBasicMaterial();
    this._figure = new THREE.Mesh(this.geometry, this.material);
  }
  public setFigurePosition(point: Point): void {
    this.figure.geometry.translate(point.x, point.y, point.z);
  }

  public setFigureColor(color: string): void {
    (this.figure.material as MeshBasicMaterial).color = new Color(
      color as ColorRepresentation
    );
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

  get material(): MeshBasicMaterial {
    return this._material;
  }

  set material(value: MeshBasicMaterial) {
    this._material = value;
  }

  get figure(): Mesh {
    return this._figure;
  }

  set figure(value: Mesh) {
    this._figure = value;
  }

  public static DEFAULT_WIDTH = 3;
  public static DEFAULT_HEIGHT = 3;
  public static DEFAULT_DEPTH = 3;
}
