<template>
    <Home />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from './components/Home.vue';

@Component({
  components: {
    Home
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body{
    margin: 0px;
    padding: 0px;
    font-family: Verdana, Geneva, Tahoma, sans-serif; 
    color: #282c34;
}
h1,h2,h3,h4,h5,h6{margin: 0px; padding: 0px;}
a, a:hover{text-decoration: none;}
</style>
