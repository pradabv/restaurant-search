<template>
    <div>
        <div v-if="selectedItem">
            <div class="restaurant-details">
                <div class="retaurant-header">
                    <h2><a :href="selectedItem.url" :target="'_blank'">{{selectedItem.name}}</a></h2>
                    <p><b>Rating:</b> {{selectedItem.rating}}</p>
                    <h4 class="location">
                        <img src="../assets/icons/marker.svg" alt="restaurant location" title="restaurant location">
                        <span>{{selectedItem.location.formatted_address}}</span>
                    </h4>
                    <h4 class="location" v-if="selectedItem.display_phone">
                        <img src="../assets/icons/phone.svg" alt="restaurant number" title="restaurant number">
                        <span>{{selectedItem.display_phone}}</span>
                    </h4>
                </div>
                <div class="retaurant-img" v-for="(img, index) of selectedItem.photos" :key="index"> 
                    <img :src="img" :alt="selectedItem.name" :title="selectedItem.name">
                </div>
            </div>
            <div class="restaurant-reviews">
                <h5>Reviews</h5>
                <ul v-if="selectedItem.reviews.length">
                    <li v-for="(review, index) in selectedItem.reviews" :key="index"> 
                        <p><b>Rating:</b> {{review.rating}}</p>
                        <p>{{review.text}}</p>
                    </li>
                </ul>
                <p v-else>No reviews found</p>
            </div>
        </div>
        <div v-else class="welcome-screen">
            <h3>Welcome to Restaurant Finder</h3>
            <p>Please Select a Restaurant to view details</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';

@Component
export default class RestaurantDetail extends Vue {
  mounted() {
    store.dispatch('getJsonData');
  }

  get selectedItem() {
    return store.state.selectedItem;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.restaurant-details{
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    place-content: flex-start;
    align-items: flex-start;
    padding: 40px;
}
.welcome-screen{
   padding: 15px 250px;
}
.retaurant-header{
    width: 70%;
}
.retaurant-header h2{
    text-decoration: underline;
    margin-bottom: 20px;
}
.retaurant-header a {
    color:  #282c34;
}
.retaurant-header h4.location{
    font-size: 16px;
    margin: 20px 0px;
    font-weight: normal;
}

.retaurant-img{
    width: 30%;
}
.retaurant-img img{
    width: 100%;
    height: auto;
}

.restaurant-reviews{
    padding: 0px 40px;
}
.restaurant-reviews h5{
    font-size: 20px;
}
.restaurant-reviews ul{
    height: 30vh;
    padding-right: 30px;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>


