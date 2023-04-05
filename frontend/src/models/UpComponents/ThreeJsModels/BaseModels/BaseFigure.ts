import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";
import { DefaultCubeGeometry } from "@/models/UpComponents/ThreeJsModels/Geometry/DefaultCubeGeometry";
import { DefaultStandardMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultStandardMaterial";
import { DefaultBasicMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultBasicMaterial";
import * as THREE from "three";
import {
  Color,
  ColorRepresentation,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "three";

export class BaseFigure {
  private _object: Mesh;
  private _rotation: DefaultRotation;
  private _position: DefaultPosition;
  private _scale: DefaultScale;
  private _geometry: DefaultCubeGeometry;
  private _material: DefaultStandardMaterial | DefaultBasicMaterial;

  constructor(
    rotation: DefaultRotation,
    position: DefaultPosition,
    scale: DefaultScale,
    geometry: DefaultCubeGeometry,
    material: DefaultStandardMaterial | DefaultBasicMaterial
  ) {
    this._geometry = geometry;
    this._material = material;
    this._object = new THREE.Mesh(this.geometry.object, this.material.material);
    this._rotation = rotation;
    this.setRotation(this._rotation);

    this._position = position;
    this.setPosition(this._position);

    this._scale = scale;
    this.setScale(this._scale);
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
      this._rotation.x,
      this._rotation.y,
      this._rotation.z
    );
  }

  public getPosition(): DefaultPosition {
    return this._position;
  }

  public getScale(): DefaultScale {
    return this._scale;
  }

  public getRotation(): DefaultRotation {
    return this._rotation;
  }

  get object(): Mesh {
    return this._object;
  }

  set object(value: Mesh) {
    this._object = value;
  }

  get geometry(): DefaultCubeGeometry {
    return this._geometry;
  }

  set geometry(value: DefaultCubeGeometry) {
    this._geometry = value;
  }

  get material(): DefaultStandardMaterial | DefaultBasicMaterial {
    return this._material;
  }

  set material(value: DefaultStandardMaterial | DefaultBasicMaterial) {
    this._material = value;
  }
}
