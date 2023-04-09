import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { MathUtils } from "three";
import { DefaultStandardMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultStandardMaterial";
import { DefaultCubeGeometry } from "@/models/UpComponents/ThreeJsModels/Geometry/DefaultCubeGeometry";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";
import { BaseFigure } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseFigure";

export class CubeStandard extends BaseFigure {
  constructor(materialType = "color", texturePath = "") {
    super(
      CubeStandard.DEFAULT_ROTATION,
      CubeStandard.DEFAULT_POSITION,
      CubeStandard.DEFAULT_SCALE,
      new DefaultCubeGeometry(),
      new DefaultStandardMaterial(materialType, texturePath)
    );
  }
  public animation(delta: number) {
    const radiansPerSecond = MathUtils.degToRad(40);
    this.object.rotation.z += radiansPerSecond * delta;
    this.object.rotation.x += radiansPerSecond * delta;
    this.object.rotation.y += radiansPerSecond * delta;
    this.object.position.x += 0.001;
    this.object.position.y += 0.001;
    this.object.position.z += 0.001;
  }

  public static DEFAULT_ROTATION = new DefaultRotation(0.1, 0.2, 0.1);
  public static DEFAULT_POSITION = new DefaultPosition(0, 0, 0);
  public static DEFAULT_SCALE = new DefaultScale(2, 2, 2);
}
