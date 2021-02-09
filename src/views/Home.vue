<template>
  <div class="km-home-container">
    <BImg center src="https://images.typeform.com/images/BvzPkwdzSw/image/default" fluid-grow alt="Center image"/>
    <div class="km-header">
      <h1 class="km-headline">
        Welcome to <i>"Kya Bharath banega Akhila-ka-pati"</i>, play with friends and foes 
      </h1>
      <p class="km-sub-heading">
        There are 18 questions and no break for refreshments in the middle.
        <br>
        (You'll have to provide your own snacks, sorry.)
      </p>
    </div>
    <BButton :pressed="false" variant="success" size="lg" class="km-start-btn" @click="start">
      <span class="km-btn-text">Let's get started</span>
    </BButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  BImg,
  BButton,
} from 'bootstrap-vue';

@Component({
  components: {
    BImg,
    BButton,
  }
})
export default class HomePage extends Vue {

  private start() {
    this.$router.push({path: `/question/${0}`});
  }

}
</script>

<style lang="scss" scoped>

.km-home-container {
  width: 100%;
  max-width: 880px;
  text-align: center;
  margin: 170px auto;
  padding-left: 40px;
  padding-right: 40px;
}

.km-header {
  width: 90%;
  padding-top: 24px;
  padding-bottom: 24px;
  margin: auto;
}

.km-headline {
  max-width: 100%;
  font-weight: unset;
  font-size: 24px;
  line-height: 32px;
  color: rgb(33, 34, 16);
}

.km-sub-heading {
  margin: 0px;
  max-width: 100%;
  font-weight: unset;
  font-size: 20px;
  line-height: 28px;
  color: rgba(33, 34, 16, 0.56);
}
.km-start-btn {
  font-weight: 700;
  background-color: rgb(75, 185, 183);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;
  padding: 8px 18px;
  min-height: 48px;
  color: rgb(1, 4, 4);
  border-radius: 4px;
}
.km-btn-text {
  margin: 0px;
  max-width: 100%;
  font-weight: unset;
  font-size: 24px;
  line-height: 32px;
  color: rgb(1, 4, 4);
}

</style>
