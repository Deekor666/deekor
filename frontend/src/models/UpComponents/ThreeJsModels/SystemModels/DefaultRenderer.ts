import { WebGLRenderer } from "three";
import * as THREE from "three";

export class DefaultRenderer {
  private readonly _renderer: WebGLRenderer;

  constructor() {
    this._renderer = new THREE.WebGLRenderer();
  }

  get renderer(): WebGLRenderer {
    return this._renderer;
  }
}
