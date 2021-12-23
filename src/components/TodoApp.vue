<template>
    <div class="container " style="width: 600px">
       <h2 class="text-center mt-5">Vue Todo App</h2>
       <div class="d-flex">
           <input v-model="task" type="text" placeholder="Enter task" class="form-control">
           <button  @click="submitTasks" class="btn btn-warning rounded-0">SUBMIT</button>
       </div>

        <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col" class="text-center">#</th>
            <th scope="col" class="text-center">#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index" class="animate__animated animate__flash">
            <td>
              <span :class="{'finished': task.status === 'finished'}">
                {{ task.name }}
              </span>
            </td>
            <td style="max-width: 50px"> 
              <span @click="changeStatus(index)" class="pointer"
                  :class="{'text-danger': task.status === 'to-do',
                  'text-warning': task.status === 'in-progess',
                  'text-success': task.status === 'finished'}"
              >
                  {{ firstCharUpper(task.status) }} 
              </span> 
            </td>
            <td>
                <div class="text-center" @click="editTask(index)">
                    <span class="fa fa-pen"></span>
                </div>
            </td>
            <td>
                <div class="text-center" @click="deleteTask(index)">
                    <span class="fa fa-trash"></span>
                </div>
            </td>
          </tr>
        </tbody>
        </table>

    </div>
</template>

<script>
export default {
    name: 'Helloworld',
    props: {
        msg: String
    },
    data() {
      return {
        task: '',
        editedTask: null,
        availableStatuses: ['to-do', 'in-progess','finished'],
        tasks: [
          {
            name: 'Hello',
            status: 'to-do'
          },
          {
            name: 'Write your task',
            status: 'in-progess'
          },
          
        ]
      }
    },
    methods: {
      submitTasks() {
          if (this.task.length === 0) return;
          
          if (this.editedTask === null) {
            this.tasks.push({
              name: this.task,
              status: 'to-do'
            });
          }
          else {
            this.tasks[this.editedTask].name = this.task;
            this.editedTask = null;
          }
          this.task = '';
      },
      deleteTask(index) {
          this.tasks.splice(index, 1);
      },
      editTask(index) {
        this.task = this.tasks[index].name;
        this.editedTask = index;
      },
      changeStatus(index) {
        let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
        if (++newIndex > 2) newIndex = 0;
        this.tasks[index].status = this.availableStatuses[newIndex];
      },
      firstCharUpper(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
    }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.finished {
  text-decoration: line-through;
}
</style>
