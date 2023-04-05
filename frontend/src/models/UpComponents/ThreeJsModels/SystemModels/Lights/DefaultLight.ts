import { BaseLight } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseLight";

export class DefaultLight extends BaseLight {
  constructor() {
    super();
  }
  public animation(/*delta: number*/) {
    // increase the cube's rotation each frame
    // const radiansPerSecond = MathUtils.degToRad(30);
    this.object.position.x -= 0.01;
    this.object.position.y += 0.01;
    this.object.position.z += 0.05;
  }
}
