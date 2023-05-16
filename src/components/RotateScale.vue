<template>
  <div id="hello-world">Move</div>
</template>
  
  <script>
/*eslint-disable*/
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js"; // 引入轨道控制器扩展库OrbitControls.js
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 创建3D场景对象Scene
      const scene = new THREE.Scene();
      //创建一个长方体几何对象Geometry
      const geometry = new THREE.BoxGeometry(10, 10, 10);
      //创建一个材质对象Material
      const material = new THREE.MeshBasicMaterial({
        color: 0xff0000, //0xff0000设置材质颜色为红色
      });
      // 两个参数分别为几何体geometry、材质material
      const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

      //缩放
      mesh.scale.x = 2;
      // mesh.rotation.set();
      scene.add(mesh);

      const width = 1500; //宽度
      const height = 1000; //高度
      // 实例化一个透视投影相机对象
      const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
      //相机在Three.js三维坐标系中的位置
      // 根据需要设置相机位置具体值
      camera.position.set(200, 200, 200);
      //相机观察目标指向Threejs 3D空间中某个位置
      camera.lookAt(0, 0, 0); //坐标原点
      // 定义相机输出画布的尺寸(单位:像素px)

      // 创建渲染器对象
      const renderer = new THREE.WebGLRenderer();
      // 定义threejs输出画布的尺寸(单位:像素px)
      renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
      renderer.render(scene, camera); //执行渲染操作

      document.getElementById("hello-world").appendChild(renderer.domElement);

      // 设置相机控件轨道控制器OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);

      // AxesHelper：辅助观察的坐标系
      const axesHelper = new THREE.AxesHelper(180);
      scene.add(axesHelper);

      function render() {
        mesh.position.x += 0.1;
        mesh.rotateX(0.01);
        // console.log(mesh.position.x, "111111");
        if (mesh.position.x >= 180) {
          mesh.position.x = 0;
        }
        renderer.render(scene, camera); //执行渲染操作
        requestAnimationFrame(render);
      }

      render();
    },
  },
};
</script>
  
  <style scoped>
</style>