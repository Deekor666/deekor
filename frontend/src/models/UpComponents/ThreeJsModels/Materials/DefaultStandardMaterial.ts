import {
  Color,
  ColorRepresentation,
  Material,
  MeshStandardMaterial,
} from "three";
import * as THREE from "three";

export class DefaultStandardMaterial {
  private _material: Material | MeshStandardMaterial;
  private _color: ColorRepresentation;

  constructor() {
    this._color = DefaultStandardMaterial.DEFAULT_COLOR;
    this._material = new THREE.MeshStandardMaterial({ color: this.color });
  }

  get color(): ColorRepresentation {
    return this._color;
  }

  set color(value: ColorRepresentation) {
    (this.material as MeshStandardMaterial).color = new Color(value);
    this._color = value;
  }

  get material(): Material | MeshStandardMaterial {
    return this._material;
  }

  set material(value: Material | MeshStandardMaterial) {
    this._material = value;
  }

  public static DEFAULT_COLOR = new Color("blue");
}
