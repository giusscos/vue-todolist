const app = new Vue ({
    el: "#app",
    data: {
        appName: 'ToDoList',
        newTask: '',
        tasks: new Array(),
    },
    methods: {
        addTask() {
            this.tasks.push({
                text: this.newTask,
                done: false,
            })

            this.newTask = '';
        }
    }
});