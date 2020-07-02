// 为组件提供 install 方法，供组件对外按需引入
import ElTest from './src/test'

ElTest.install = Vue => {
  Vue.component(ElTest.name, ElTest)
}

export default ElTest