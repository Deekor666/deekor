import { Texture, TextureLoader, Vector2 } from "three";

export class DefaultTexture {
  private textureLoader = new TextureLoader();
  private readonly _object: Texture;

  constructor(filePath: string) {
    this._object = this.textureLoader.load(filePath);
    this.testFields();
  }

  public testFields() {
    // this._object.offset = new Vector2(0.2, 0.2);
    // this._object.repeat = new Vector2(1, 1);
    // this._object.rotation = 0.1;
    this._object.center = new Vector2(10, 10);
  }
  get object(): Texture {
    return this._object;
  }
}
