<template>
  <div class="km-btn-wrapper">
    <BButton class="km-default-btn" :disabled="disable" :class="{ 'km-correct': isCorrect, 'km-wrong': isWrong }"
      block variant="outline-secondary" @click="selected">
      {{option.value}}
    </BButton>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { BButton } from 'bootstrap-vue';
import { IOption } from '../core/questions-list';

@Component({
  components:{
    BButton,
  }
})
export default class OptionCard extends Vue {

  @Prop({required: true})
  private option: IOption;

  @Prop({required: true})
  private disable: boolean;

  @Emit()
  private select(optionKey: string) {
    return;
  };

  private get isSelected(): boolean {
    return this.option.isSelected || false;
  };

  private get isCorrect(): boolean {
    return this.isSelected && this.option.isCorrect;
  }

  private get isWrong(): boolean {
    return this.isSelected && !this.option.isCorrect;
  }

  private selected() {
    this.select(this.option.key);
  }
  
}
</script>

<style scoped lang="scss">

.km-btn-wrapper {
  display: inline-block;
  width: 45%;
  padding: 10px;
}

.km-default-btn {
  color: #fff;
}

.km-correct {
  background-color: #28a745 !important;
  border-color: #28a745 !important;
}

.km-wrong {
  background-color: #dc3545 !important;
  border-color: #dc3545 !important;
}
</style>