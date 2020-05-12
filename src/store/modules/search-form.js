const state = {
    isSearchForName: false,
    isSearchForPrice: false,
    isSearchForMeter: false,
    name: null,
    params: {
        city: null,
        action: null,
        type: null
    },
    price: {
        min: null,
        max: null,
        type: null
    },
    meter: {
        min: null,
        max: null
    },
}

const getters = {
    getSubmitData: (state) => {
        return {
            name: state.name,
            params: {
                city: state.params.city,
                action: state.params.action,
                type: state.params.type
            },
            price: {
                min: state.price.min,
                max: state.price.max,
                type: state.price.type
            },
            meter: {
                min: state.meter.min,
                max: state.meter.max,
            },
        }
    }
}

const actions = {
    changeSearchForName({commit, dispatch}, value) {
        if (value) {
            dispatch('emptyParams')
        } else {
            commit('setName', null)
        }
        commit('setIsSearchForName', value)
    },
    changeSearchForPrice({state, commit, dispatch}) {
        if (state.isSearchForPrice) dispatch('emptyPrice')
        commit('setIsSearchForPrice', !state.isSearchForPrice)
    },
    changeSearchForMeter({state, commit, dispatch}) {
        if (state.isSearchForMeter) dispatch('emptyMeter')
        commit('setIsSearchForMeter', !state.isSearchForMeter)
    },
    emptyParams({commit}) {
        commit('setCity', null)
        commit('setAction', null)
        commit('setType', null)
    },
    emptyPrice({commit}) {
        commit('setMinPrice', null)
        commit('setMaxPrice', null)
        commit('setPriceType', null)
    },
    emptyMeter({commit}) {
        commit('setMinMeter', null)
        commit('setMaxMeter', null)
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
    setName(state, name) {
        state.name = name
    },
    setCity(state, city) {
        state.params.city = city
    },
    setAction(state, action) {
        state.params.action = action
    },
    setType(state, type) {
        state.params.type = type
    },
    setMinPrice(state, price) {
        state.price.min = +price
    },
    setMaxPrice(state, price) {
        state.price.max = +price
    },
    setPriceType(state, type) {
        state.price.type = type
    },
    setMinMeter(state, meter) {
        state.meter.min = +meter
    },
    setMaxMeter(state, meter) {
        state.meter.max = +meter
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}