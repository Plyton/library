export default {
    state: {
        isMobile: false
    },
    mutations: {
        SWITCH_MOBILE(state) {
            state.isMobile = true
        }
    },
    actions: {
        SET_MOBILE({ commit }) {
            commit('SWITCH_MOBILE')
        }
    },
    getters: {
        IS_MOBILE(state) {
            return state.isMobile
        }
    },
}