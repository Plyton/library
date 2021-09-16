import Vue from 'vue'
import Vuex from 'vuex'
import isMobile from './modules/isMobile'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        isMobile
    }
})