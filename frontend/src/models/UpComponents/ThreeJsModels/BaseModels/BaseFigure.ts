import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";
import { DefaultColorMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultColorMaterial";
import { DefaultTextureMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultTextureMaterial";
import * as THREE from "three";
import {
  Color,
  ColorRepresentation,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "three";
import { BaseGeometry } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseGeometry";

export class BaseFigure {
  private _object: Mesh;
  private _rotation?: DefaultRotation;
  private _position?: DefaultPosition;
  private _scale?: DefaultScale;
  private _geometry: BaseGeometry;
  private _material: DefaultColorMaterial | DefaultTextureMaterial;

  constructor(
    geometry: BaseGeometry,
    material: DefaultColorMaterial | DefaultTextureMaterial
  ) {
    this._geometry = geometry;
    this._material = material;
    this._object = new THREE.Mesh(this.geometry.object, this.material.material);
  }

  public setObjectName(name: string) {
    this._object.name = name;
  }
  public setDoubleSide(): void {
    this.material.material.side = THREE.DoubleSide;
  }

  public setColor(color: string): void {
    (this.object.material as MeshStandardMaterial).color = new Color(
      color as ColorRepresentation
    );
  }

  public animation(delta: number) {
    // increase the cube's rotation each frame
    const radiansPerSecond = MathUtils.degToRad(30);
    this._object.rotation.z += radiansPerSecond * delta;
    this._object.rotation.x += radiansPerSecond * delta;
    this._object.rotation.y += radiansPerSecond * delta;
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
      MathUtils.degToRad(this._rotation.x),
      MathUtils.degToRad(this._rotation.y),
      MathUtils.degToRad(this._rotation.z)
    );
  }

  public getPosition(): DefaultPosition {
    return <DefaultPosition>this._position;
  }

  public getScale(): DefaultScale {
    return <DefaultScale>this._scale;
  }

  public getRotation(): DefaultRotation {
    return <DefaultRotation>this._rotation;
  }

  get object(): Mesh {
    return this._object;
  }

  set object(value: Mesh) {
    this._object = value;
  }

  get geometry(): BaseGeometry {
    return this._geometry;
  }

  set geometry(value: BaseGeometry) {
    this._geometry = value;
  }

  get material(): DefaultColorMaterial | DefaultTextureMaterial {
    return this._material;
  }

  set material(value: DefaultColorMaterial | DefaultTextureMaterial) {
    this._material = value;
  }
}
