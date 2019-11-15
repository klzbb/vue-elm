<template>
    <div class="addr">
        <pub-header>
            <span slot="logo">elme</span>
        </pub-header>
        <div class="addr_content">
            <div class="cur">当前城市</div>
            <div class="hot">
              renmen
            </div>
            <div class="cities">
              城市列表
            </div>
        </div>

        <!-- {{currentCity}} -->
    </div>
</template>
<script>
import { F100100, F100101, F100102 } from '@/service/index.js'
import PubHeader from '../../components/header/index.vue'
export default {
  name: 'addr',
  components: { PubHeader },
  data () {
    return {
      currentCity: {},
      hotCityList: [],
      cities: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.F100100()
      this.F100101()
      this.F100102()
    },
    // 定位当前城市
    async F100100 () {
      let data = await F100100()
      this.currentCity = data
    },
    // 热门城市
    async F100101 () {
      let data = await F100101()
      this.hotCityList = data
    },
    // 所有城市
    async F100102 () {
      let data = await F100102()
      this.cities = data
    }
  }
}
</script>
<style lang="scss">
.addr {
    color: red;
    font-size: 14px;
    &_content{
      padding-top: 100px;
    }
}
</style>
