import { BaseScene } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseScene";
import { DefaultLight } from "@/models/UpComponents/ThreeJsModels/SystemModels/Lights/DefaultLight";
import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";
import { Floor } from "@/models/UpComponents/ThreeJsModels/Figures/Floor";
import { Box1 } from "@/models/UpComponents/ThreeJsModels/Figures/Box1";
import { Circle1 } from "@/models/UpComponents/ThreeJsModels/Figures/Circle1";
import { Sphere1 } from "@/models/UpComponents/ThreeJsModels/Figures/Sphere1";
import { Wall } from "@/models/UpComponents/ThreeJsModels/Figures/Wall";

export class DefaultScene extends BaseScene {
  constructor(parentContainer: HTMLDivElement, width: number, height: number) {
    super(parentContainer, width, height);

    const light = new DefaultLight();
    light.setPosition(new DefaultPosition(4, 2, 10));
    light.setIntensity(4);
    light.setColor("#ffffff");
    this.addLightInScene(light);

    this.getCamera().setPosition(new DefaultPosition(20, 30, 50));
    this.getCamera().setScale(new DefaultScale(10, 10, 10));
    this.getCamera().setRotation(new DefaultRotation(-10, 0, 0));

    const cube = new Box1(2, 2, 2, "/pngTextures/Carbon_Normal.png");
    cube.setObjectName("cube1");
    cube.material.setRepeat(15, 15);
    cube.setPosition(new DefaultPosition(2, 2, 2));
    cube.setColor("#ff8766");
    this.addFigureInScene(cube);

    const sphere1 = new Sphere1(1, 100, 100);
    sphere1.setObjectName("sphere1");
    sphere1.setPosition(new DefaultPosition(6, 5, 2));
    sphere1.setColor("#d595ec");
    this.addFigureInScene(sphere1);

    const circle = new Circle1(1, 40, "/pngTextures/cloud.png");
    circle.setObjectName("circle1");
    circle.setDoubleSide();
    circle.setPosition(new DefaultPosition(6, 2, 2));
    circle.setColor("#ffffff");
    this.addFigureInScene(circle);

    const floor = new Floor(200, 200, "/pngTextures/wood.png");
    floor.setObjectName("floor1");
    floor.material.setRepeat(10, 10);
    floor.setDoubleSide();
    floor.setRotation(new DefaultRotation(90, 0, 0));
    floor.setPosition(new DefaultPosition(100, 0, 100));
    floor.setColor("#ffffff");
    this.addFigureInScene(floor);

    const wallYZ = new Wall(
      100,
      100,
      "/pngTextures/harshbricks-albedo.png",
      100,
      100
    );
    wallYZ.setObjectName("wallYZ");
    wallYZ.material.setRepeat(10, 10);
    wallYZ.setDoubleSide();
    wallYZ.setRotation(new DefaultRotation(0, 90, 0));
    wallYZ.setPosition(new DefaultPosition(0, 50, 50));
    wallYZ.setColor("#b05d41");
    this.addFigureInScene(wallYZ);

    const wallXY = new Wall(
      100,
      100,
      "/pngTextures/harshbricks-albedo.png",
      100,
      100
    );
    wallXY.setObjectName("wallXY");
    wallXY.material.setRepeat(10, 10);
    wallXY.setDoubleSide();
    wallXY.setRotation(new DefaultRotation(0, 0, 0));
    wallXY.setPosition(new DefaultPosition(50, 50, 0));
    wallXY.setColor("#b05d41");
    this.addFigureInScene(wallXY);

    this.looper.addFigureInUpdates(cube);
    // this.looper.addFigureInUpdates(light);
    // this.looper.addFigureInUpdates(this.getCamera());

    this.onAxes();
  }
}
