<template>
  <div class="header">
    <slot name="logo"></slot>
    <span @click="sign">登陆 | 注册</span>
  </div>
</template>
<script>
export default {
  name: 'PubHeader',
  methods: {
    sign () {
      alert('登陆注册·')
    }
  }

}
</script>
<style lang="scss">
.header{
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  color: #fff;
  display:flex;
  background-color: #3190e8;
  height: 88px;
  padding:0 20px;
  align-items: center;
  justify-content: space-between;
}
</style>
