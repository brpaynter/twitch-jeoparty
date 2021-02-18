import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import routes from '@/router/routes'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
  state: {
    name: 'default'
  },
  mutations: {
      set_state(new_state) {
          this.state.name = new_state
      }
  }
})

const router = routes.create_router()

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
