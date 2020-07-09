
Vue.component('to-do', {
    
    
    template: `
        
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos" :key="todo.todoId" :class="{'line-through': todo.completed}">
                <input type="checkbox" id="checkbox" v-model="todo.completed">
                {{ todo.todoTitle }}
            </li>
        </ul>

        
    </div>
        
    `,

    data(){
        return{
            selectedTodo: 0,
            todos:[
                {
                    todoId: 1,
                    todoTitle: "Make notes",
                    completed : false
                },
                {
                    toDoId: 2,
                    todoTitle: "Meal prep",
                    completed : false
                },{
                    toDoId: 3,
                    todoTitle: "Pack the books",
                    completed : false
                },
        ],
            
        }
    },

    methods: {
        addToDoItem(toDoItem){
            this.todos.push(toDoItem)
        }
    }


})


Vue.component('to-do-form', {
    
    
    template: `
    <form @submit.prevent="onSubmit">
      
        <p>
            <label for="title">Title:</label>
            <input v-model="newToDO">
        </p>        
        <p>
            <input type="submit" value="Submit">  
        </p>    
  
    </form>
    `,

    data(){
        return{
            itemId: 5,
            newToDO: null,
            itemCompleted: false
        }
    },
    methods: {
        onSubmit(){
            let toDoItem = {
                itemId: 5,
                itemTitle: this.itemTitle,
                itemCompleted: false               
            }
            this.$emit('toDoItemSubmitted', toDoItem)
            this.itemTitle = null,
            this.itemCompleted= false 
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