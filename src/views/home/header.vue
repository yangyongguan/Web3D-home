<template>
  <div class="y-header">
    <img class="logo" src="../../assets/img/logo.png"/>
    <span class="title">yyg的web 3d空间</span>
  </div>
</template>

<script>
export default {
  name: 'y-header'
}
</script>

<style lang="scss" scoped>
 .y-header{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 60px;
   line-height: 60px;
   padding: 0 20px;
   text-align: left;
   background-color: rgba(0,0,0,.2);
   border-bottom: 1px solid #333;
   color: #fff;
   .logo{
     display: inline-block;
     width: 40px;
     height: 40px;
     border-radius: 50%;
     background-color: #888;
     margin-right: 10px;
     vertical-align: middle;
   }
   .title{
     display: inline-block;
     vertical-align: middle;
     font-size: 20px;
   }
 }
</style>
