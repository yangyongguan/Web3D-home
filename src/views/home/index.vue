<template>
  <div class="home">
    <y-header></y-header>
    <y-menu></y-menu>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import YHeader from './header'
import YMenu from './menu'
export default {
  name: 'Home',
  components: { YHeader, YMenu }
}
</script>

<style lang="scss" scoped>
  .main{
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/img/bg.jpg');
    background-size: cover;
  }
</style>
