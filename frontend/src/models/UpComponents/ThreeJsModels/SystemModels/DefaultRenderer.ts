import { WebGLRenderer } from "three";
import * as THREE from "three";

export class DefaultRenderer {
  private readonly _object: WebGLRenderer;

  constructor(parentElement: HTMLDivElement) {
    // antialias - сглаживание
    this._object = new THREE.WebGLRenderer({ antialias: true });

    // улучшение качества света
    this.offUseLegacyLights();

    parentElement.append(this.object.domElement);
  }

  public offUseLegacyLights() {
    this._object.useLegacyLights = false;
  }

  get object(): WebGLRenderer {
    return this._object;
  }
}
