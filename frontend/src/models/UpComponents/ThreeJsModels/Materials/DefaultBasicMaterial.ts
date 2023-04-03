import { Color, ColorRepresentation, MeshBasicMaterial } from "three";
import * as THREE from "three";

export class DefaultBasicMaterial {
  private _material: MeshBasicMaterial;
  private _color: ColorRepresentation;

  constructor(color: string) {
    this._color = color as ColorRepresentation;
    this._material = new THREE.MeshBasicMaterial({ color: this.color });
  }

  get color(): ColorRepresentation {
    return this._color;
  }

  set color(value: ColorRepresentation) {
    (this.material as MeshBasicMaterial).color = new Color(value);
    this._color = value;
  }

  get material(): MeshBasicMaterial {
    return this._material;
  }

  set material(value: MeshBasicMaterial) {
    this._material = value;
  }
}
