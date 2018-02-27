import * as func from '@/util/function.js'
import * as types from './mutation_types.js'
export default {
    [types.SWITCHTHEME](state, obj) {
        state.theme = obj.theme
        func.theme_local.set(state)
    }
}