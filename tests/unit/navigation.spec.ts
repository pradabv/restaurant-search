import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Navigation from '@/components/Navigation.vue';

describe('Navigation.vue', () => {
    xit('renders props.msg when passed', () => {
      const msg = 'new message'
      const wrapper = shallowMount(Navigation, {
        propsData: { msg }
      })
      expect(wrapper.text()).to.include(msg)
    })
  })
  