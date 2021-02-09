<template>
  <div style="margin-top:45px">
    <BTableSimple hover small caption-top responsive>
      <caption></caption>
      <BThead head-variant="dark">
        <BTr>
          <BTh colspan="1">##</BTh>
          <BTh colspan="3">Task</BTh>
        </BTr>
      </BThead>
      <BTbody>
        <BTr v-for="task in taskList" :key="task.taskId" :style="{ 'background-color': task.taskColor, color: '#fff'}">
          <BTd>
            <!-- <BIcon icon="cone-striped" aria-hidden="true"></BIcon> -->
            {{task.taskId}}
          </BTd>
          <BTd>
            {{task.taskDesc}}
          </BTd>
        </BTr>
      </BTbody>
    </BTableSimple>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ITask, TaskList } from '../core/task-list';
import {
  BTableSimple,
  BThead,
  BTr,
  BTh,
  BTbody,
  BTd,
  BIcon,
  BIconConeStriped,
} from 'bootstrap-vue';

@Component({
  components:{
    BTableSimple,
    BThead,
    BTr,
    BTh,
    BTbody,
    BTd,
    BIcon,
    BIconConeStriped,
  }
})
export default class TaskTable extends Vue {
  private taskList: ITask[] = TaskList;
}
</script>