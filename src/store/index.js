/*
 * @Author: itaffy
 * @Date: 2022-07-08 22:27:39
 * @LastEditors: itaffy
 * @LastEditTime: 2022-07-09 01:37:13
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
  },
  getters,
})

export default store
