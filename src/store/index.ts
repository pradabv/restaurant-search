import Vue from 'vue';
import Vuex from 'vuex';
import { AppTypes } from '@/types/apptypes';
import BusinessService from '../services/business.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedItem: null,
    business: [] as AppTypes.Business[]
  },
  mutations: {
    setJsonData(state, data: AppTypes.Business[]) {
      state.business = data;
    },
    setSelectedItem(state, selectedItem) {
      state.selectedItem = selectedItem;
    }
  },
  actions: {
    getJsonData(context) {
      BusinessService.getJsonData().then( res => {
        context.commit('setJsonData', res.data.search.business);
      });
    }
  }
});
