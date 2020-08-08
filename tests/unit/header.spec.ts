import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
    it('renders props.msg when passed', () => {
      const appHeaderText = 'Restaurant Finder';
      const wrapper = shallowMount(Header, {
        propsData: { appHeaderText }
      })
      expect(wrapper.text()).to.include(appHeaderText)
    })
  })
  