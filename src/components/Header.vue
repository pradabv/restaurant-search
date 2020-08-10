<template>
  <header>
        <div class="container header">
          <h1>{{appHeaderText}}</h1>
        </div>
  </header>
</template>

<script lang="ts">
import { Component,  Vue, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
   @Prop() private appHeaderText!: string;
}
</script>

<style scoped>
header{
    background-color: #282c34;
    color:#fff;
    padding: 30px 0px;
}
header h1 {
    font-size: 30px;
    padding-left: 30px;
}
</style>


