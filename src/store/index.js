import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import mutations from './mutations.js'
import * as func from '@/util/function.js'
import actions from './action.js'
Vue.use(Vuex)

const state = func.theme_local.get() || {
    theme: 'yellow'
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})