<!--
 * @Descripttion: app header
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-26 17:45:15
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-11-29 16:22:12
 -->
<template>
  <div class="header">
    <slot name="logo"></slot>
    <span @click="loginOrSign">登陆 | 注册</span>
  </div>
</template>
<script>
export default {
  name: 'PubHeader',
  methods: {
    loginOrSign () {
      this.$emit('loginOrSign')
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
