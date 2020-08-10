import { shallowMount, mount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
    it('Header renders props.appHeaderText when passed', () => {
        const appHeaderText = 'New Title';
        const wrapper = shallowMount(Header, {
          propsData: { appHeaderText }
        });
        expect(wrapper.text()).toContain(appHeaderText);
    });

    it('Header MatchSnapshot', () => {
      const appHeaderText = 'Restaurant Finder';
      const wrapper = mount(Header, {
        propsData: { appHeaderText }
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
  