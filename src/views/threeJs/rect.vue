<template>
  <div class="chart" id="rectChart">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as THREE from 'three'
@Component
export default class YMenu extends Vue {
  scene: any
  mesh: any
  camera: any
  renderer: any
  mounted ():void {
    this.initPage()
  }

  initPage ():void {
    this.renderRect()
    this.animate()
  }

  renderRect ():void {
    /* eslint-disable */
    /* 创建场景 */
    this.scene = new THREE.Scene()
    /* 创建纹理 */
    let texture = new THREE.TextureLoader().load('../img/texture.jpg')
    /* 创建几何图形-矩形 */
    // CubeGeometry(width, height, depth, segmentsWidth, segmentsHeight, segmentsDepth, materials, sides)
    // let geometry = new THREE.CubeGeometry( 200, 200, 200 ); // 等价于 new THREE.BoxGeometry( 200, 200, 200 )
    // 为了创建一个立方体，我们需要使用盒子模型（BoxGeometry），这是一个包含立方体所有顶点和填充面的对象。
    // let geometry = new THREE.BoxGeometry( 200, 200, 200 );
    const geometry = new THREE.BoxGeometry(200, 200, 200)
    // 等价于 new THREE.CubeGeometry(200, 200, 200)
    // 创建质材
    // let material = new THREE.MeshBasicMaterial( { map: texture } );
    const material = new THREE.MeshBasicMaterial({
      // color: 0xffff00,
      // wireframe: true,
      map: texture
    })
    // 创建网格， 几何体是不能被渲染的，只有几何体和材质结合成网格才能被渲染到屏幕上
    // 网格简单可以理解为 胶水，吧质材贴合到几何体上
    this.mesh = new THREE.Mesh(geometry, material)
    // 添加几何体到场景中
    this.scene.add(this.mesh)
    // 创建透视相机
    /*
      PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
      fov — 摄像机截锥垂直视野
      aspect — 视野纵横比
      near — 近景
      far — 远景 */
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000)
    // 设置相机位置
    this.camera.position.z = 400
    this.camera.position.set(0, 0, 400) //set(x,y,z)
    this.camera.lookAt(new THREE.Vector3(0, 0, 400))
    // 创建渲染器
    this.renderer = new THREE.WebGLRenderer({
      antialias: true, // true/false表示是否开启反锯齿
      alpha: true, // true/false 表示是否可以设置背景色透明
      precision: 'highp', // highp/mediump/lowp 表示着色精度选择
      premultipliedAlpha: false, // true/false 表示是否可以设置像素深度（用来度量图像的分辨率）
      preserveDrawingBuffer: true, // true/false 表示是否保存绘图缓冲
      stencil: false // false/true 表示是否使用模板字体或图案
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    // 把渲染器返回的画布添加到dom元素上
    const dom: any = document.querySelector('#rectChart')
    if (dom) {
      dom.appendChild(this.renderer.domElement)
    }
    window.addEventListener('resize', this.onWindowResize, false)
  }

  onWindowResize ():void {
    // 重置视野纵横比
    this.camera.aspect = window.innerWidth / window.innerHeight
    // 更新相机投影矩阵，必须在参数发生变化后调用。
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  animate ():void {
    requestAnimationFrame(this.animate)
    // 改变物体位置
    this.mesh.rotation.x += 0.005
    this.mesh.rotation.y += 0.01

    this.renderer.render(this.scene, this.camera)
  }
}
</script>

<style lang="scss" scoped>
  .chart{
    height: 100%;
    width: 100%;
  }
</style>
