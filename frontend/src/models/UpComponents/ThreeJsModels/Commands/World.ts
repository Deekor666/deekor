import { DefaultCamera } from "@/models/UpComponents/ThreeJsModels/SystemModels/Camera/DefaultCamera";
import { Light, Mesh, PerspectiveCamera } from "three";
import { DefaultScene } from "@/models/UpComponents/ThreeJsModels/SystemModels/Scene/DefaultScene";
import { Point } from "@/models/UpComponents/ThreeJsModels/SystemModels/Point";
import { DefaultRenderer } from "@/models/UpComponents/ThreeJsModels/SystemModels/DefaultRenderer";
import { DefaultCubeBasic } from "@/models/UpComponents/ThreeJsModels/Figures/DefaultCubeBasic";
import { DefaultCubeStandard } from "@/models/UpComponents/ThreeJsModels/Figures/DefaultCubeStandard";
import { DefaultLight } from "@/models/UpComponents/ThreeJsModels/SystemModels/Lights/DefaultLight";
export class World {
  private _camera: PerspectiveCamera;
  private _cameraPosition: Point;
  private _scene: DefaultScene;
  private _renderer: DefaultRenderer;
  private _width: number;
  private _height: number;
  private _figures: Mesh[];
  private _parentContainer: HTMLDivElement;
  constructor(container: HTMLDivElement, width: number, height: number) {
    this._width = width;
    this._height = height;
    this._figures = [];
    this._parentContainer = container;

    this._scene = new DefaultScene();

    this._cameraPosition = new Point(0, 0, 10);
    this._camera = new DefaultCamera(
      this.width / this.height,
      this.cameraPosition
    ).camera;

    this._renderer = new DefaultRenderer(this.parentContainer);

    const light = new DefaultLight();
    light.position = new Point(10, 10, 10);
    this.addLightInScene(light.object);

    const cubeFigure1 = new DefaultCubeBasic();
    const cubeFigure2 = new DefaultCubeStandard();
    cubeFigure2.setFigurePosition(new Point(1, 2, 3));
    cubeFigure2.setFigureColor("red");
    this.addFigureInScene(cubeFigure1);
    this.addFigureInScene(cubeFigure2);
  }
  public addLightInScene(light: Light): void {
    this.scene.object.add(light);
  }

  public addFigureInScene(
    figure: DefaultCubeBasic | DefaultCubeStandard
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

  get parentContainer(): HTMLDivElement {
    return this._parentContainer;
  }

  set parentContainer(value: HTMLDivElement) {
    this._parentContainer = value;
  }

  get figures(): Mesh[] {
    return this._figures;
  }

  set figures(value: Mesh[]) {
    this._figures = value;
  }

  get cameraPosition(): Point {
    return this._cameraPosition;
  }

  set cameraPosition(value: Point) {
    this._cameraPosition = value;
  }

  get camera(): PerspectiveCamera {
    return this._camera;
  }

  set camera(value: PerspectiveCamera) {
    this._camera = value;
  }

  get scene(): DefaultScene {
    return this._scene;
  }

  set scene(value: DefaultScene) {
    this._scene = value;
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

  get renderer(): DefaultRenderer {
    return this._renderer;
  }

  set renderer(value: DefaultRenderer) {
    this._renderer = value;
  }
}
