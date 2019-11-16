<template>
    <div class="addr">
        <pub-header>
            <span slot="logo">elme</span>
        </pub-header>
        <div class="addr_content">
            <div class="cur">
                <div class="cur_row">
                    <span>定位当前城市：</span>
                    <span>定位不准时，请在城市列表中选择</span>
                </div>
                <div class="cur_row">
                    <span class="city">{{currentCity.name}}</span>
                    <svg-icon icon-class="next" class="next" />
                </div>
            </div>
            <div class="hot">
                <h4 class="title">热门城市</h4>
                <ul class="list">
                    <router-link
                        tag="li"
                        v-for="item in hotCityList"
                        :to="'/city/' + item.id"
                        :key="item.id"
                    >{{item.name}}</router-link>
                </ul>
            </div>
            <div class="cities">
                <ul class="cities_out">
                    <li v-for="(value, key, index) in cities" :key="key" class="cities_out_item">
                        <h4 class="city_title">
                            {{key}}
                            <span v-if="index == 0">（按字母排序）</span>
                        </h4>
                        <ul class="cities_inner">
                            <router-link
                                tag="li"
                                v-for="item in value"
                                :to="'/city/' + item.id"
                                :key="item.id"
                                class="cities_inner_item"
                            >{{item.name}}</router-link>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <!-- {{currentCity}} -->
    </div>
</template>
<script>
import { F100100, F100101, F100102 } from '@/service/index.js'
import PubHeader from '@/components/Header/index.vue'
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
    color: #000;
    font-size: 28px;
    &_content {
        padding-top: 100px;
        .cur {
            &_row {
                background-color: #fff;
                display: flex;
                padding: 0 20px;
                justify-content: space-between;
                align-items: center;
                height: 80px;
                .city {
                    font-size: 34px;
                    color: #3190e8;
                }
            }
            &_row:last-child {
                border-top: 1px solid #e4e4e4;
                border-bottom: 2px solid #e4e4e4;
            }
        }
        .hot {
            background-color: #fff;
            margin-top: 20px;
            .title {
                line-height: 84px;
                padding-left: 20px;
                border-top: 2px solid #e4e4e4;
                border-bottom: 1px solid #e4e4e4;
            }
            .list {
                display: flex;
                flex-wrap: wrap;
                li {
                    width: 187.5px;
                    line-height: 90px;
                    text-align: center;
                    box-sizing: border-box;
                    color: #3190e8;
                    border-bottom: 1px solid #e4e4e4;
                    border-right: 1px solid #e4e4e4;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                li:nth-of-type(4n) {
                    border-right: none;
                }
            }
        }
        .cities {
            margin-top: 20px;
            .city_title {
                border-top: 2px solid #e4e4e4;
                border-bottom: 1px solid #e4e4e4;
                line-height: 84px;
                padding-left: 20px;
            }
            &_out {
                &_item {
                    background-color: #fff;
                    margin-bottom: 20px;
                    border-bottom: 2px solid #e4e4e4;
                }
            }
            &_inner {
                display: flex;
                flex-wrap: wrap;
                &_item {
                    // font-size: 30px;
                    box-sizing: border-box;
                    width: 187.5px;
                    line-height: 90px;
                    text-align: center;
                    border-bottom: 1px solid #e4e4e4;
                    border-right: 1px solid #e4e4e4;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                &_item:nth-of-type(4n) {
                    border-right: none;
                }
            }
        }
    }
    .next {
        width: 28px;
        height: 28px;
        fill: #999;
    }
}
</style>
