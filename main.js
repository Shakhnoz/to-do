

Vue.component('to-do-list', {
    
    
    template: `
    
      <div>
        <p> 
            <input class="form-control col-4 border border-danger" v-model="newToDO" @keyup.enter="addToDo" placeholder="Today I'm gonna do...">
        </p>  
        <ul class="list-group">
            <li class="list-group-item col-4" v-for="(todo, index) in todos" :key="todo.Id" :class="{'line-through': todo.completed}">
                <input type="checkbox" id="checkbox" v-model="todo.completed">
                {{ todo.Title }}
                <div class="btn-group float-right">
                    <button type="button" class="btn btn-success">Edit</button>
                    <button type="button" class="btn btn-danger" @click="removeToDo(index)">Delete</button>
                </div>
            </li>
        </ul> 
      </div>  
    
    `,

    data(){
        return{
            todoId: 4,
            newToDO: '',
            itemCompleted: false,
            todos:[
                {
                    Id: 1,
                    Title: "Make notes",
                    completed : false
                },
                {
                    Id: 2,
                    Title: "Meal prep",
                    completed : false
                },{
                    Id: 3,
                    Title: "Pack the books",
                    completed : false
                },
        ],
        }
    },
    methods: {
        addToDo(){           

            this.todos.push(
                {
                    Id: this.todoId,
                    Title: this.newToDO,
                    completed: false
                })

                this.newToDO = ''
                this.todoId++
            
        },
        removeToDo(index){
            this.todos.splice(index, 1)
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        title: "to-dos",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], 
        
        
        },
        computed: {
            description(){
                return this.days[0] + ' ' + this.title;
            }
    }  
})