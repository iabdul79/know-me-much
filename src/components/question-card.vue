<template>
    <BJumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template #header>Question {{questionId+1}}</template>

      <template #lead>
        {{question}}?
      </template>

      <hr class="my-4">
      <OptionCard v-for="option in options" :key="option.key" :option="option" :disable="hasAnswered" @select="selected"></OptionCard>
    </BJumbotron>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue, Watch } from "vue-property-decorator";
import { BJumbotron } from 'bootstrap-vue';
import OptionCard from './option-card.vue';
import { QuestionList, IOptions, IAnswerStatus, IOption } from './../core/questions-list';

@Component({
  components:{
    BJumbotron,
    OptionCard,
  }
})
export default class QuestionCard extends Vue {

  private options: IOption[] = [];

  @Prop({required: true})
  private questionId: number;

  @Prop({required: true})
  private hasAnswered: boolean;

  @Prop({required: true})
  private answer: string;

  @Emit()
  private updateAnswerStatus(answerStatus: IAnswerStatus) {
    return;
  }

  @Watch('hasAnswered')
  private updateList() {
    this.options = this.getOptions();
  }

  private get question(): string {
    return QuestionList[this.questionId].question;
  }

  private getOptions(): IOption[] {
    const options = QuestionList[this.questionId].options;
    return options.map((option, index) => {
      const id = `k${index}`;
      return {
        key: id,
        value: option,
        isCorrect: QuestionList[this.questionId].correctKey === id,
        isSelected: this.hasAnswered && this.answer === id,
      };
    });
  }

  private mounted() {
    this.options = this.getOptions();
  }

  private selected(optionKey: string) {
    this.updateAnswerStatus({answered: true, answer: optionKey});
  }
  
}
</script>


<style scoped lang="scss">
</style>
