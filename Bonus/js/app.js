const app = new Vue ({
    el: "#app",
    data: {
        appName: 'ToDoList',
        newTask: '',
        tasks: new Array(),
        tsDone: new Array()
    },
    computed: {
        tasksDone() {
            return this.tsDone;
        }
    },
    methods: {
        addTask() {
            this.newTask = this.newTask.trim();

            if(this.newTask === '') return
            
            this.tasks.push({
                text: this.newTask,
                done: false,
            })

            this.newTask = '';
        },
        completeTask(task){
            if(!task.done){
                this.tsDone.push(task.text);
            } else {
                const index = this.tsDone.indexOf(task.text);
                this.tsDone.splice(index, 1);
            }
            return task.done = !task.done;
        }
    }
});