import { BaseScene } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseScene";
import { DefaultCubeBasic } from "@/models/UpComponents/ThreeJsModels/Figures/DefaultCubeBasic";
import { DefaultLight } from "@/models/UpComponents/ThreeJsModels/SystemModels/Lights/DefaultLight";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { DefaultCircle } from "@/models/UpComponents/ThreeJsModels/Figures/DefaultCircle";
export class WorldScene extends BaseScene {
  constructor(container: HTMLDivElement, width: number, height: number) {
    super(container, width, height);

    const light = new DefaultLight();
    light.setPosition(new DefaultPosition(10, 10, 20));
    this.addLightInScene(light);

    const cubeFigure1 = new DefaultCubeBasic();
    cubeFigure1.setRotation(new DefaultRotation(-0.8, -0.1, 0.8));
    cubeFigure1.setPosition(new DefaultPosition(1, 1, 1));
    cubeFigure1.setFigureColor("chartreuse");

    const circleFigure2 = new DefaultCircle();
    circleFigure2.setRotation(new DefaultRotation(-0.8, -0.1, 0.8));
    circleFigure2.setPosition(new DefaultPosition(-1, -1, -1));
    circleFigure2.setFigureColor("red");
    this.addFigureInScene(cubeFigure1);
    this.addFigureInScene(circleFigure2);
  }
}
