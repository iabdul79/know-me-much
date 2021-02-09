<template>
  <div class="km-home-container">
    <QuestionCard :key="questionId" :question-id="questionId" :answer="answer"
      :has-answered="hasAnswered" @update-answer-status="updateAnswerStatus"></QuestionCard>
    <div class="km-footer">
      <BRow>
        <BCol>
          <div>
            <BDropdown id="dropdown-dropup" dropup variant="info">
              <template #button-content>
                <BIcon icon="heart-fill" aria-hidden="true"></BIcon> Life lines
              </template>
              <BDropdownItemButton>
                Call a friend
              </BDropdownItemButton>
              <BDropdownItemButton>
                Call the bride
              </BDropdownItemButton>
              <BDropdownItemButton>
                50-50
              </BDropdownItemButton>
            </BDropdown>
            <div class="km-progress">
              <BProgress :max="maxQuestions+1" show-progress animated>
                <BProgressBar :value="green" variant="success"></BProgressBar>
                <BProgressBar :value="red" variant="danger"></BProgressBar>
              </BProgress>
            </div>
          </div>
        </BCol>
        <BCol align-self="center">
          <div v-if="hasAnswered && answer !== correctAnswer">
            <BButton class="km-wrong-btn" title="short" variant="danger">
              Take-e-Short
            </BButton>
            <BButton class="km-wrong-btn" title="Dare" variant="warning" @click="openTasks">
              Do Do Dare
            </BButton>
          </div>
        </BCol>
        <BCol>
          <div class="km-navigate-btns">
            <BButtonGroup>
              <BButton title="Home" variant="info" @click="goHome">
                <BIcon icon="house-fill" font-scale="1.5"></BIcon> Navigate Home
              </BButton>
              <BButton :disabled="questionId===0" title="Previous Question" variant="info" @click="previousQuestion">
                <BIcon icon="chevron-down" font-scale="1.5"></BIcon>
              </BButton>
              <BButton :disabled="questionId===maxQuestions" title="Next Question" variant="info" @click="nextQuestion">
                <BIcon icon="chevron-up" font-scale="1.5"></BIcon>
              </BButton>
            </BButtonGroup>
          </div>
        </BCol>
      </BRow>
    </div>
    <BModal ref="km-task-modal" size="xl" hide-header hide-footer>
      <BRow class="km-task-container">
        <BCol>
          <div class="km-task-wheel">
            <h3>Spin the wheel of trouble</h3>
            <TaskWheel></TaskWheel>
         </div>
        </BCol>
        <BCol>
          <TaskList></TaskList>
        </BCol>
      </BRow>
  </BModal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Route, NavigationGuardNext } from 'vue-router';
import QuestionCard from '../components/question-card.vue';
import TaskWheel from '../components/task-wheel.vue';
import TaskList from '../components/task-list.vue';
import {
  BRow,
  BCol,
  BButtonGroup,
  BButton,
  BIcon,
  BIconChevronUp,
  BIconChevronDown,
  BIconHouseFill,
  BDropdown,
  BDropdownItemButton,
  BIconHeartFill,
  BModal,
  BProgress,
  BProgressBar,
} from 'bootstrap-vue';
import { IAnswersStatus, IAnswerStatus, QuestionList } from '../core/questions-list';

@Component({
  components: {
    BRow,
    BCol,
    BButtonGroup,
    BButton,
    BIcon,
    BIconChevronUp,
    BIconChevronDown,
    BIconHouseFill,
    BDropdown,
    BDropdownItemButton,
    BIconHeartFill,
    BModal,
    BProgress,
    BProgressBar,
    QuestionCard,
    TaskWheel,
    TaskList,
  }
})
export default class QuestionPage extends Vue {

  private questionId = 0;
  private maxQuestions = 18;
  private answersStatus: IAnswersStatus = {};
  private green = 0;
  private red = 0;

  private get hasAnswered(): boolean {
    return (this.answersStatus[`${this.questionId}`] || {}).answered || false;
  }

  private get answer(): string {
    return (this.answersStatus[`${this.questionId}`] || {}).answer || '';
  }

  private get correctAnswer(): string {
    return QuestionList[this.questionId].correctKey;
  }

  public mounted() {
    this.answersStatus = {};
    this.maxQuestions = 19;
    this.questionId = parseInt(this.$route.params.id);
  }

  public beforeRouteUpdate (to: Route, from: Route, next: NavigationGuardNext) {
    this.questionId = parseInt(to.params.id);
    next();
  }

  private goHome() {
    this.$router.push({path: '/'});
  }

  private nextQuestion() {
    this.$router.push({path: `/question/${this.questionId+1}`});
  }

  private previousQuestion() {
    this.$router.push({path: `/question/${this.questionId-1}`});
  }

  private updateAnswerStatus(answerStatus: IAnswerStatus) {
    const answersStatus = Object.assign({}, this.answersStatus); 
    answersStatus[`${this.questionId}`] = answerStatus;
    this.answersStatus = answersStatus;
    this.calculateStats();
  }

  private openTasks() {
    (this.$refs['km-task-modal'] as any).show();
  }

  private calculateStats() {
    let green=0;
    let red=0;
    Object.keys(this.answersStatus).forEach(questionId => {
      const correctAns = QuestionList[parseInt(questionId)].correctKey;
      const ans = this.answersStatus[questionId].answer;
      if (correctAns === ans) {
        green++;
      } else {
        red++;
      }
    });
    this.green = green;
    this.red = red;
  }

}
</script>

<style lang="scss" scoped>

.km-home-container {
  width: 100%;
  margin: 170px auto;
  padding-left: 40px;
  padding-right: 40px;
}

.km-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: transparent;
  color: white;
  padding: 20px;
}

.km-navigate-btns {
  text-align: right;
}

.km-wrong-btn {
  margin-right: 30px;
  padding: 5px 40px;
}

.km-task-container {
  margin: 40px;
}

.km-progress {
  display: inline-block;
  width: 60%;
  margin: 5px;
}

</style>
