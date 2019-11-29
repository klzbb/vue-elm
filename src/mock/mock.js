/*
 * @Descripttion: DOP
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-29 11:36:16
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-11-29 13:44:20
 */
// 导入模块
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// 设置模拟调试器实例
var mock = new MockAdapter(axios)
export default mock
