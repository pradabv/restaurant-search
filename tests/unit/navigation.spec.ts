
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Navigation from '@/components/Navigation.vue';
import Vuex from 'vuex';
import {sampleData} from '../mockData/mock.data';
import Store from './../../src/store/index';

const localVueWithVuex = createLocalVue();
localVueWithVuex.use(Vuex);

describe('Navigation.vue', () => {

  it('Navigation renders no records before set data in store', () => {
    const wrapper = shallowMount(Navigation, {
      localVue: localVueWithVuex
    });
    expect(wrapper.findAll('ul li').length > 0).toBeFalsy();
  });

  it('Navigation renders records after set data in store', () => {
    Store.commit('setJsonData', sampleData);
    const wrapper = shallowMount(Navigation, {
      localVue: localVueWithVuex
    });
    expect(wrapper.findAll('ul li').length).toBeGreaterThan(0);
  });

  it('Navigation trigger setSelectedItem after li click', () => {
    Store.commit('setJsonData', sampleData);
    const wrapper = shallowMount(Navigation, {
      localVue: localVueWithVuex
    });
    wrapper.find('ul li').trigger('click');
    expect(wrapper.vm.$emit('setSelectedItem')).toBeTruthy();
  });

  
  //Snapshots

  it('Navigation before selecting item MatchSnapshot', () => {
    Store.commit('setJsonData', sampleData);
    const wrapper = shallowMount(Navigation, {
      localVue: localVueWithVuex
    });
    expect(wrapper.html()).toMatchSnapshot();
  });


  it('Navigation after selecting item MatchSnapshot', () => {
    Store.commit('setJsonData', sampleData);
    const wrapper = shallowMount(Navigation, {
      localVue: localVueWithVuex
    });
    wrapper.find('ul li').trigger('click');
    expect(wrapper.html()).toMatchSnapshot();
  });

  });
  