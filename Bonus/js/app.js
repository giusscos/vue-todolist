const app = new Vue ({
    el: "#app",
    data: {
        appName: 'ToDoList',
        newTask: '',
        tasks: new Array(),
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
        }
    }
});