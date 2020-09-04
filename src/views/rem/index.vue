<template>
<div class="rem">
  <div class="d1">375px</div>
  <div class="d2">750px</div>
</div>
</template>
<script>
export default {
  name: 'Rem'
}
</script>
<style lang="scss">
.rem{
  padding-top: 20px;
  font-size: 15px;
  .d1{
    width: 375px;
    background-color: red;
    color: #fff;
    box-sizing: border-box;
    border: 1px solid #000;
    line-height: 44px;
    margin-bottom: 20px;
  }
  .d2{
    width: 750px;
    background-color: red;
    color: #fff;
    box-sizing: border-box;
    line-height: 44px;
    border: 1px solid #000;
  }
}
</style>
