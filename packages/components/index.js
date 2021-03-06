/* eslint-disable comma-dangle */
/**
 * @author origin
 * Date: 18/05/06
 */
// 调用组建
import MetaInfo from './meta-info/index'
import WButton from './button/index.js'
import WLoadingBar from './loading-bar/index'
import Wlayout from './layout/index'
import WInput from './input/index'
import Wsingle from './single/index'
import Wcheckbox from './checkbox/index'
import Wupload from './upload/index'
import Wtable from './table/index'
import Wloading from './loading/index'
import Wswiper from './swiper/index'
import WTabs from './tabs/index'
import WuploadPhoto from './uploadPhoto/index'
import Walert from './confirm/index'
// dolary
import Dcartoon from './dolary/index'

// directives
import Directives from '../directives/index'

// 全局调用icon样式
import './style/icon.css'

const components = [
  WButton,
  Wlayout,
  WInput,
  Wsingle,
  Wcheckbox,
  Wupload,
  Wtable,
  Wloading,
  Wswiper,
  Walert,
  WTabs,
  Dcartoon,
  WuploadPhoto
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Object.keys(Directives).forEach(key => {
    Vue.directive(key.toString().toLowerCase(), Directives[key])
  })
  Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WButton,
  WLoadingBar,
  Wlayout,
  Wsingle,
  Walert,
  Wcheckbox,
  Wupload,
  Wtable,
  Wloading,
  Wswiper,
  WTabs,
  Dcartoon,
  WuploadPhoto,
  Directives
}
