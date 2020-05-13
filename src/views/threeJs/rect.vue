<template>
  <div class="m">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as THREE from 'three'
@Component
export default class YMenu extends Vue {
  created ():void {
    this.initPage()
  }

  initPage ():void {
    this.renderRect()
  }

  renderRect ():void {
    // 创建场景
    const scene = new THREE.Scene()
    console.log(scene)
  }
}
</script>

<style lang="scss" scoped>
  .m{
    color: red;
  }
</style>
