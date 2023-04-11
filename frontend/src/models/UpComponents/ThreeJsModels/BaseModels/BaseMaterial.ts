import {
  Color,
  ColorRepresentation,
  Material,
  MeshStandardMaterial,
  RepeatWrapping,
} from "three";
import { DefaultTexture } from "@/models/UpComponents/ThreeJsModels/Textures/DefaultTexture";
import * as THREE from "three";

export class BaseMaterial {
  private _material: Material;
  private _color?: ColorRepresentation;
  private _texture?: DefaultTexture;

  constructor(textureType = "color", filePathTexture = "") {
    if (filePathTexture !== "") {
      this._texture = new DefaultTexture(filePathTexture);
    }
    if (textureType === "color") {
      this._color = BaseMaterial.DEFAULT_COLOR;
      this._material = new THREE.MeshStandardMaterial({ color: this.color });
    } else if (textureType === "texture" && this._texture !== undefined) {
      this._material = new THREE.MeshStandardMaterial({
        map: this._texture.object,
      });
    } else {
      this._material = new THREE.MeshStandardMaterial();
    }
  }

  public setRepeat(x: number, y: number) {
    if (this.texture !== undefined) {
      this.texture.object.wrapS = RepeatWrapping;
      this.texture.object.wrapT = RepeatWrapping;
      this.texture.object.repeat.set(x, y);
    }
  }
  get color(): ColorRepresentation {
    return <Color>this._color;
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

  get texture(): DefaultTexture | undefined {
    return this._texture;
  }

  public static DEFAULT_COLOR = new Color("blue");
  public static DEFAULT_COLOR_MATERIAL_TYPE = "color";
  public static DEFAULT_TEXTURE_MATERIAL_TYPE = "texture";
}
