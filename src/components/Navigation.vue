<template>
   <div>
    <h3>{{business.length}} {{business.length >1  ? 'Restaurants' : 'Restaurant'}}</h3>
      <div class="restaurant-list">
        <ul>
            <li @click="selectItem(item)" v-for="(item, index) in business" :key="index" :class=" selectedItem && selectedItem.id === item.id ? 'active' : ''">
                <a>
                    <h2>{{item.name}}</h2>
                    <h4 class="location">
                        <img src="../assets/icons/marker.svg" alt="restaurant location" title="restaurant location">
                        <span class="address" v-if="item.location.address1">{{item.location.address1}},</span>
                        <span v-if="item.location.city">{{item.location.city}}</span>
                    </h4>
                </a>
            </li>
        </ul>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';
import { AppTypes } from '@/types/apptypes';

@Component
export default class Navigation extends Vue {
  get business(): AppTypes.Business[] {
    return store.state.business;
  }

  get selectedItem() {
    return store.state.selectedItem;
  }

  selectItem(item: AppTypes.Business) {
    store.commit('setSelectedItem', item);
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-left h3{
    background-color: #d3d3d3;
    font-size: 16px;
    padding: 15px 30px;
}
.restaurant-list{
    height: 74vh;
    overflow-y: scroll;
    overflow-x: hidden;
}

.restaurant-list h2{
    font-size: 16px;
    margin-bottom: 10px;
}
h4.location{
    font-size: 15px;
    font-weight: normal;
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    place-content: flex-start;
    align-items: flex-start;
}
h4.location img{
    width: 20px; 
    height: auto;
    margin-right: 5px;
}
.restaurant-list ul{
    margin: 0px; 
    padding: 0px;
}
.restaurant-list ul li{
    list-style: none;
    padding: 24px 30px;
    border-bottom:#d3d3d3 1px solid;
}
.restaurant-list ul li.active{
    background-color: #61dafb;
}
.restaurant-list ul li:hover{
    background-color: #e8faff;
}
.restaurant-list ul li.active:hover{
    background-color: #61dafb;
}
.restaurant-list ul li a{
    color: #282c34;
}
.restaurant-list ul li a:hover{
    color: #282c34;
}
.location .address{
  margin-right: 5px;
}
</style>
