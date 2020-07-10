Vue.component('to-do-list', {
    template: `    
      <div>
        <p> 
            <input 
                class="form-control col-4 border border-danger" 
                v-model="toDoTitle" 
                @keyup.enter="addToDo" 
                placeholder="Today I'm gonna do..." autofocus>
        </p>  
        <ul class="list-group">
            <li 
                class="list-group-item col-4" 
                v-for="(todo, index) in todos" 
                :key="todo.Id" >

                <input type="checkbox" v-model="todo.completed">
                <div id="toDoTitle" :class="{'line-through': todo.completed}">
                    {{ todo.Title }}
                </div>
                <div class="btn-group float-right">
                    <button type="button" class="btn btn-success" @click="editToDo(todo, index)">Edit</button>
                    <button v-if="todo.edit" type="button" class="btn btn-success" @click="updateToDo(todo,index)">Update</button>
                    <button type="button" class="btn btn-danger" @click="removeToDo(index)">Delete</button>
                </div>
            </li>
        </ul> 
      </div>  
    `,

    data(){
        return{
            todoId: 4,
            toDoTitle: '',
            todos:[
                {
                    Id: 1,
                    Title: "Make notes",
                    completed : false,
                    edit: false,

                },
                {
                    Id: 2,
                    Title: "Meal prep",
                    completed : false,
                    edit: false,
                },{
                    Id: 3,
                    Title: "Pack the books",
                    completed : false,
                    edit: false,
                },
        ],
        }
    },
    methods: {
        addToDo(){           

            if(this.toDoTitle != '' && this.toDoTitle.trim().length != 0){
                this.todos.push(
                    {
                        Id: this.todoId,
                        Title: this.toDoTitle,
                        completed: false
                    })
    
                    this.toDoTitle = ''
                    this.todoId++
                    localStorage.setItem('todos', JSON.stringify(this.todos))
                
                }
            },
        editToDo(todo, index){
            this.toDoTitle = todo.Title,
            this.edit = true

            },
            
         updateToDo(todo,index){
            this.todo = {
                Title: this.toDoTitle
            }
            localStorage.setItem('todos', JSON.stringify(this.todos))
            this.toDoTitle = ''
            this.edit = false
            },

        removeToDo(index){
            this.$delete(this.todos, index)
            localStorage.setItem('todos', JSON.stringify(this.todos))
        }
        
    },
    created: function(){
        let todoDB = JSON.parse(localStorage.getItem('todos'));
        if (todoDB === null){
            this.todos = [];
        }else{
            this.todos=todoDB;
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