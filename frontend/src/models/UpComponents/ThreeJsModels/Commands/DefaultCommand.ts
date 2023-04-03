import { Light, Mesh, PerspectiveCamera } from "three";
import { Point } from "@/models/UpComponents/ThreeJsModels/SystemModels/Point";
import { DefaultScene } from "@/models/UpComponents/ThreeJsModels/SystemModels/Scene/DefaultScene";
import { DefaultCamera } from "@/models/UpComponents/ThreeJsModels/SystemModels/Camera/DefaultCamera";
import { DefaultLight } from "@/models/UpComponents/ThreeJsModels/SystemModels/Lights/DefaultLight";
import { DefaultRenderer } from "@/models/UpComponents/ThreeJsModels/SystemModels/DefaultRenderer";
import { DefaultCubeBasic } from "@/models/UpComponents/ThreeJsModels/Figures/DefaultCubeBasic";
import { DefaultCubeStandard } from "@/models/UpComponents/ThreeJsModels/Figures/DefaultCubeStandard";
import { Rotation } from "@/models/UpComponents/ThreeJsModels/SystemModels/Rotation";

export class DefaultCommand {
  private _width: number;
  private _height: number;
  private _figures: Mesh[];
  private _lights: Light[];
  private _camera: PerspectiveCamera;
  private _cameraPosition: Point;
  private _scene: DefaultScene;
  private _renderer: DefaultRenderer;
  private _parentContainer: HTMLDivElement;

  constructor(parentContainer: HTMLDivElement, width: number, height: number) {
    this._width = width;
    this._height = height;
    this._parentContainer = parentContainer;
    this._figures = [];
    this._lights = [];

    this._scene = new DefaultScene();

    this._cameraPosition = new Point(0, 0, 10);
    this._camera = new DefaultCamera(
      this.width / this.height,
      this.cameraPosition
    ).camera;

    this._renderer = new DefaultRenderer(parentContainer);

    const light = new DefaultLight();
    light.position = new Point(10, 10, 10);
    this.addLightInScene(light.object);

    const cube = new DefaultCubeStandard();
    cube.position = new Point(0, 0, 0);
    cube.rotation = new Rotation(-0.5, -0.1, 0.8);
    cube.setFigureColor("chartreuse");

    this.addFigureInScene(cube);
  }

  public addLightInScene(light: Light): void {
    this.scene.object.add(light);
    this.lights.push(light);
  }
  public addFigureInScene(
    figure: DefaultCubeStandard | DefaultCubeBasic
  ): void {
    this.scene.object.add(figure.object);
    this.figures.push(figure.object);
  }

  render() {
    this.renderer.object.setSize(this.width, this.height);
    this.camera.updateProjectionMatrix();
    this.renderer.object.setPixelRatio(window.devicePixelRatio);
    this.renderer.object.render(this.scene.object, this.camera);
  }

  get lights(): Light[] {
    return this._lights;
  }

  set lights(value: Light[]) {
    this._lights = value;
  }

  get camera(): PerspectiveCamera {
    return this._camera;
  }

  set camera(value: PerspectiveCamera) {
    this._camera = value;
  }

  get cameraPosition(): Point {
    return this._cameraPosition;
  }

  set cameraPosition(value: Point) {
    this._cameraPosition = value;
  }

  get scene(): DefaultScene {
    return this._scene;
  }

  set scene(value: DefaultScene) {
    this._scene = value;
  }

  get renderer(): DefaultRenderer {
    return this._renderer;
  }

  set renderer(value: DefaultRenderer) {
    this._renderer = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get figures(): Mesh[] {
    return this._figures;
  }

  set figures(value: Mesh[]) {
    this._figures = value;
  }

  get parentContainer(): HTMLDivElement {
    return this._parentContainer;
  }

  set parentContainer(value: HTMLDivElement) {
    this._parentContainer = value;
  }
}
