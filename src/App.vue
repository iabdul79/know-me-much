<template>
  <BContainer>
    <BRow align-v="center">
      <BCol align-self="center">
        <router-view />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  BContainer,
  BRow,
  BCol,
  BImg,
  BButton,
} from 'bootstrap-vue';

@Component({
  components: {
    BContainer,
    BRow,
    BCol,
    BImg,
    BButton,
  }
})
export default class App extends Vue {}

</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';

body {
  background-color: rgb(249, 222, 86) !important;
}
</style>
