<template>
  <div>
    <Header  appHeaderText="Restaurant Finder" />
    <section class="main-section">
      <div class="main-left">
        <Navigation />
      </div>
      <div class="main-right">
        <RestaurantDetail />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from './Navigation.vue';
import  Header from './Header.vue';
import  RestaurantDetail from './RestaurantDetail.vue';
import store from '@/store';

@Component({
    components: {
      Header,
      Navigation,
      RestaurantDetail
    }
})
export default class Home extends Vue {
  mounted() {
    store.dispatch('getJsonData')
  }

  get selectedItem() {
    return store.state.selectedItem;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-section{
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    place-content: flex-start;
    align-items: flex-start;
}


.main-left{
    width: 30%;
    border-right:#d3d3d3 1px solid;
}
.main-right{
    width: 70%;
}

</style>


