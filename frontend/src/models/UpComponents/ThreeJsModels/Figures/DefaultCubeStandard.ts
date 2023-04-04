import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { Color, ColorRepresentation, MeshStandardMaterial } from "three";
import { DefaultStandardMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultStandardMaterial";
import { DefaultCubeGeometry } from "@/models/UpComponents/ThreeJsModels/Geometry/DefaultCubeGeometry";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";
import { BaseFigure } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseFigure";

export class DefaultCubeStandard extends BaseFigure {
  constructor() {
    super(
      DefaultCubeStandard.DEFAULT_ROTATION,
      DefaultCubeStandard.DEFAULT_POSITION,
      DefaultCubeStandard.DEFAULT_SCALE,
      new DefaultCubeGeometry(),
      new DefaultStandardMaterial()
    );
  }
  public setFigureColor(color: string): void {
    (this.object.material as MeshStandardMaterial).color = new Color(
      color as ColorRepresentation
    );
  }

  public static DEFAULT_ROTATION = new DefaultRotation(0.1, 0.1, 0.1);
  public static DEFAULT_POSITION = new DefaultPosition(5, 5, 5);
  public static DEFAULT_SCALE = new DefaultScale(3, 3, 3);
}
