
import axios from 'axios'
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
let mockFiles = require.context('./modules', true, /\.js$/)
mockFiles.keys().forEach(mockFile => {
  let fileName = mockFile.split('/')[1]
  let mockFilePath = `./modules/${fileName}`
  require(`${mockFilePath}`)
})

// 首页列表数据
export const M100100 = (params) => axios.post('/mock/M100100', params)

// 登录
export const M100102 = (params) => axios.post('/mock/M100102', params)
