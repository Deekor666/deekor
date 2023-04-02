import { DefaultCamera } from "@/models/UpComponents/ThreeJsModels/SystemModels/Camera/DefaultCamera";
import { Mesh, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { DefaultScene } from "@/models/UpComponents/ThreeJsModels/SystemModels/Scene/DefaultScene";
import { Point } from "@/models/UpComponents/ThreeJsModels/SystemModels/Point";
import { DefaultRenderer } from "@/models/UpComponents/ThreeJsModels/SystemModels/DefaultRenderer";
import { DefaultCube } from "@/models/UpComponents/ThreeJsModels/Figures/DefaultCube";
export class World {
  private _camera: PerspectiveCamera;
  private _cameraPosition: Point;
  private _scene: Scene;
  private _renderer: WebGLRenderer;
  private _width: number;
  private _height: number;
  private _figures: Mesh[];
  private _parentContainer: HTMLDivElement;
  constructor(container: HTMLDivElement, width: number, height: number) {
    this._width = width;
    this._height = height;
    this._figures = [];
    this._parentContainer = container;

    this._scene = new DefaultScene().scene;

    this._cameraPosition = new Point(0, 0, 10);
    this._camera = new DefaultCamera(
      this.width / this.height,
      this.cameraPosition
    ).camera;

    this._renderer = new DefaultRenderer().renderer;
    container.append(this.renderer.domElement);

    const cubeFigure1 = new DefaultCube();
    const cubeFigure2 = new DefaultCube();
    cubeFigure2.setFigurePosition(new Point(1, 2, 3));
    cubeFigure2.setFigureColor("red");
    this.addFigureInScene(cubeFigure1);
    this.addFigureInScene(cubeFigure2);
  }

  public addFigureInScene(figure: DefaultCube): void {
    this.scene.add(figure.figure);
    this.figures.push(figure.figure);
  }

  render() {
    this.renderer.setSize(this.width, this.height);
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.render(this.scene, this.camera);
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

  get scene(): Scene {
    return this._scene;
  }

  set scene(value: Scene) {
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

  get renderer(): WebGLRenderer {
    return this._renderer;
  }

  set renderer(value: WebGLRenderer) {
    this._renderer = value;
  }
}
