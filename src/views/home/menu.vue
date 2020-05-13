<template>
  <div class="y-menu" :class="{close: closeMenu}">
    <i class="iconfont iconmenu-icon menu-hander" @click="closeMenu = !closeMenu"></i>
    <ul class="left-menu">
      <li class="left-menu-item"
          :class="{'link-active':selectIdx===idx}"
          :key="idx"
          @click="selectMenu(idx)"
          v-for="(menu, idx) in menuList">
        <i class="iconfont" :class="menu.menuIcon"></i>
        <span>{{menu.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuItem from '@/classVo/menu'
@Component
export default class YMenu extends Vue {
  menuList: Array<MenuItem> = []
  selectIdx: number = 0
  closeMenu: boolean = false
  created ():void {
    this.initPage()
  }

  initPage ():void {
    this.menuList = [
      new MenuItem('11111', 'iconzhongguo', '/three/rect'),
      new MenuItem('11111', 'iconzhongguo', '/b'),
      new MenuItem('11111', 'iconzhongguo', '/b')
    ]
  }

  selectMenu (idx:number):void {
    this.selectIdx = idx
    const menuObj = this.menuList[idx]
    this.$router.push(menuObj.link)
  }
}
</script>

<style lang="scss" scoped>
  .y-menu{
    position: absolute;
    top: 60px;
    width: 200px;
    height: calc(100% - 60px);
    border-right: 1px solid #333;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all .3s;
    transform: translate3d(0, 0, 0);
    z-index: 100;
    text-align: left;
    &.close{
      transform: translate3d(-200px,0,0);
    }
    .menu-hander {
      display: block;
      position: absolute;
      top: 4px;
      right: -28px;
      font-size: 30px;
      color: #ccc;
      &:hover{
        cursor: pointer;
        color: #888;
      }
    }
    .left-menu{
      width:200px;
      height: calc(100% - 110px);
      border-right:1px solid #333;
      background-color: rgba(0,0,0,.2);
      color: #fff;
      .left-menu-item{
        width: 100%;
        float: left;
        line-height: 30px;
        padding: 5px 10px;
        background: rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid #333;
        color: rgba(255, 255, 255, 0.4);
        box-sizing: border-box;
        cursor: pointer;
        .iconfont {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 10px;
        }
        &:hover, &.link-active {
          color: #ddd;
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
</style>
