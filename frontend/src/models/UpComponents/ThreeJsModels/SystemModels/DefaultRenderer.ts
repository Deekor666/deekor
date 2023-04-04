import { WebGLRenderer } from "three";
import * as THREE from "three";

export class DefaultRenderer {
  private readonly _object: WebGLRenderer;

  constructor(parentElement: HTMLDivElement) {
    this._object = new THREE.WebGLRenderer();
    this.onPhysicallyCorrectLights();
    parentElement.append(this.object.domElement);
  }

  public onPhysicallyCorrectLights() {
    // turn on the physically correct lighting model
    // this._object.useLegacyLights = false;
  }
  get object(): WebGLRenderer {
    return this._object;
  }
}
