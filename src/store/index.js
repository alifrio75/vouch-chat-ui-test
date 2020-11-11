import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutation'

Vue.use(Vuex)

const state = {
  botReplying: false,
  topics : [
    {
        id: "housekeeping",
        title : "house keeping",
        icon: 'fa-address-card',
        thread: [],
    },
    {
        id: "inroomservice",
        title : "in-room service",
        icon: 'fa-concierge-bell',
        thread: [],
    },
    {
        id: "dining",
        title : "dining",
        icon: 'fa-utensils',
        thread: [],
    },
    {
        id: "facilities",
        title : "facilities",
        icon: 'fa-expand-alt',
        thread: [],
    },
    {
        id: "taxibooking",
        title : "taxi booking",
        icon: 'fa-taxi',
        thread: [],
    }
  ]
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
