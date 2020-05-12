const state = {
    isSearchForName: false,
    isSearchForPrice: false,
    isSearchForMeter: false
}

const getters = {}

const actions = {
    changeSearchForName({commit}, value) {
        commit('setIsSearchForName', value)
    },
    changeSearchForPrice({state, commit}) {
        commit('setIsSearchForPrice', !state.isSearchForPrice)
    },
    changeSearchForMeter({state, commit}) {
        commit('setIsSearchForMeter', !state.isSearchForMeter)
    },
}

const mutations = {
    setIsSearchForName(state, val) {
        state.isSearchForName = val
    },
    setIsSearchForPrice(state, val) {
        state.isSearchForPrice = val
    },
    setIsSearchForMeter(state, val) {
        state.isSearchForMeter = val
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}