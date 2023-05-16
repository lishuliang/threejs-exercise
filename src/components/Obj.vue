<template>
  <div id="hello-world">Obj</div>
</template>

<script>
/*eslint-disable*/
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js"; // 引入轨道控制器扩展库OrbitControls.js
export default {
  data() {
    return {
      scene: null,
      light: null,
      camera: null,
      renderer: null,
      controls: null,
    };
  },
  mounted() {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initControls();
    this.initObj();
    this.render();
  },

  methods: {
    initScene() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xa0a0a0);
      this.scene.environment = new THREE.Color(0xa0a0a0);
      this.scene.add(new THREE.AmbientLight(0x999999));
      this.light = new THREE.DirectionalLight(0xdfebff, 0.45);
      this.light.position.set(50, 200, 100);
      this.light.position.multiplyScalar(0.3);
      this.scene.add(this.light);
    },
    initCamera() {
      // 实例化一个透视投影相机对象
      this.camera = new THREE.PerspectiveCamera(
        20,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      //相机在Three.js三维坐标系中的位置
      // 根据需要设置相机位置具体值
      this.camera.position.set(20, 20, 40);
      //相机观察目标指向Threejs 3D空间中某个位置
      this.camera.lookAt(0, 0, 0); //坐标原点
      // 定义相机输出画布的尺寸(单位:像素px)
    },
    initRenderer() {
      // 创建渲染器对象
      this.renderer = new THREE.WebGLRenderer();
      // 定义threejs输出画布的尺寸(单位:像素px)
      this.renderer.setSize(window.innerWidth, window.innerHeight); //设置three.js渲染区域的尺寸(像素px)
      this.renderer.render(this.scene, this.camera); //执行渲染操作

      document
        .getElementById("hello-world")
        .appendChild(this.renderer.domElement);
    },
    initControls() {
      // 设置相机控件轨道控制器OrbitControls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    },
    initObj() {
      const _this = this;
      const mtlLoader = new MTLLoader();
      const objLoader = new OBJLoader();
      const gltfLoader = new GLTFLoader();

      // 加载模型
      gltfLoader.load(
        "./model/demo.glb",
        (gltf) => {
          // obj.position.set(-400, -200, 0);
          _this.scene.add(gltf.scene);
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        function (error) {
          console.log(error);
          console.log("An error happened");
        }
      );

      // mtlLoader.load("./model/activityCenter/ActivityCenter.mtl", (mtl) => {
      //   mtl.preload();
      //   const objLoader = new OBJLoader();
      //   objLoader.setMaterials(mtl);

      //   // 加载模型
      //   objLoader.load(
      //     "./model/activityCenter/ActivityCenter.obj",
      //     (obj) => {
      //       obj.position.set(-400, -200, 0);
      //       _this.scene.add(obj);
      //     },
      //     function (xhr) {
      //       console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      //     },
      //     // called when loading has errors
      //     function (error) {
      //       console.log(error);
      //       console.log("An error happened");
      //     }
      //   );
      // });
    },
    render() {
      const _this = this;
      _this.renderer.render(_this.scene, _this.camera); //执行渲染操作
      requestAnimationFrame(_this.render);
    },
  },
};
</script>

<style scoped>
</style>