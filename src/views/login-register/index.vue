<!--
 * @Descripttion: 登录、注册相关
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-29 15:34:34
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-11-29 16:41:41
 -->
<template>
  <div class="login">
    <div>
      <input type="text" v-model="account">
    </div>
    <div>
      <input type="text" v-model="pwd">
    </div>
    <button @click="login(account,pwd)">登录</button>
  </div>
</template>
<script>
import { M100102 } from '@/mock/index.js'
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      pwd: ''
    }
  },
  methods: {
    async login (account, pwd) {
      let res = await M100102({ account, pwd })
      if (res.data.code === 200) {
        this.$router.push({
          name: 'Home'
        })
      } else {
        alert(res.data.msg)
      }
    }
  }
}
</script>
<style lang="scss">
.login{

}
</style>
