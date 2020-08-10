
import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';
import Navigation from '@/components/Navigation.vue';
import RestaurantDetail from '@/components/RestaurantDetail.vue';

describe('Home.vue', () => {
  it('Home check its children component', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.findComponent(Navigation).html()).toBeTruthy();
    expect(wrapper.findComponent(RestaurantDetail).html()).toBeTruthy();
  });

  it('Home MatchSnapshot', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
  