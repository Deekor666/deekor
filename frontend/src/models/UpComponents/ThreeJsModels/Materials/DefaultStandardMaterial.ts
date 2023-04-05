import {
  Color,
  ColorRepresentation,
  Material,
  MeshStandardMaterial,
} from "three";
import * as THREE from "three";
import { DefaultTexture } from "@/models/UpComponents/ThreeJsModels/Textures/DefaultTexture";

export class DefaultStandardMaterial {
  private _material: Material;
  private _color: ColorRepresentation;
  private _texture: DefaultTexture | null;

  constructor(textureType = "color", filePathTexture = "") {
    this._texture = null;
    this._color = DefaultStandardMaterial.DEFAULT_COLOR;
    if (filePathTexture !== "") {
      this._texture = new DefaultTexture(filePathTexture);
    }
    if (textureType === "color") {
      this._material = new THREE.MeshStandardMaterial({ color: this.color });
    } else if (textureType === "texture" && this._texture !== null) {
      this._material = new THREE.MeshStandardMaterial({
        map: this._texture.object,
      });
    } else {
      this._material = new THREE.MeshStandardMaterial();
    }
  }

  get color(): ColorRepresentation {
    return this._color;
  }

  set color(value: ColorRepresentation) {
    (this.material as MeshStandardMaterial).color = new Color(value);
    this._color = value;
  }

  get material(): Material {
    return this._material;
  }

  set material(value: Material) {
    this._material = value;
  }

  public static DEFAULT_COLOR = new Color("blue");
}
