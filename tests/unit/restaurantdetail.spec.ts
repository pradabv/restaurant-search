import { shallowMount, createLocalVue } from '@vue/test-utils';
import RestaurantDetail from '@/components/RestaurantDetail.vue';
import Vuex from 'vuex';
import {sampleData} from '../mockData/mock.data';
import Store from './../../src/store/index';

const localVueWithVuex = createLocalVue();
localVueWithVuex.use(Vuex);

describe('RestaurantDetail.vue', () => {
  let store: any;
  
  beforeEach(() => {
    store = new Vuex.Store(Store);
  });

  it('RestaurantDetail has welcome screen before set data in store', () => {
    const wrapper = shallowMount(RestaurantDetail, {
      localVue: localVueWithVuex,
      store
    });
    expect(wrapper.findAll('.welcome-screen')).toBeTruthy();
  });

  it('RestaurantDetail has welcome screen before set data in store', () => {
    Store.commit('setSelectedItem', sampleData[0]);
    const wrapper = shallowMount(RestaurantDetail, {
      localVue: localVueWithVuex,
      store
    });
    expect(wrapper.findAll('.restaurant-details')).toBeTruthy();
  });


  it('RestaurantDetail home screen MatchSnapshot', () => {
    const wrapper = shallowMount(RestaurantDetail);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('RestaurantDetail MatchSnapshot after select item', () => {
    Store.commit('setSelectedItem', sampleData[0]);
    const wrapper = shallowMount(RestaurantDetail);
    expect(wrapper.html()).toMatchSnapshot();
  });

  });
  