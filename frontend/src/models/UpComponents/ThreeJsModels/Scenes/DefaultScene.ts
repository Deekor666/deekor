import { BaseScene } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseScene";
import { DefaultLight } from "@/models/UpComponents/ThreeJsModels/SystemModels/Lights/DefaultLight";
import { DefaultCubeStandard } from "@/models/UpComponents/ThreeJsModels/Figures/DefaultCubeStandard";
import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultAxesHelper } from "@/models/UpComponents/ThreeJsModels/DefaultAxesHelper";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";

export class DefaultScene extends BaseScene {
  constructor(parentContainer: HTMLDivElement, width: number, height: number) {
    super(parentContainer, width, height);

    const light = new DefaultLight();
    light.setPosition(new DefaultPosition(1, 1, 1));
    this.addLightInScene(light);

    const cube = new DefaultCubeStandard();
    cube.setRotation(new DefaultRotation(-0.8, -0.1, 0.8));
    cube.setPosition(new DefaultPosition(2, 3, 0));
    cube.setScale(new DefaultScale(1, 1, 2));
    cube.setFigureColor("red");
    this.addFigureInScene(cube);

    const axes = new DefaultAxesHelper(10);
    this.addScene(axes.object);

    this.onAxes();
    this.render();
  }
}
