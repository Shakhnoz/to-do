
Vue.component('to-do', {
    
    
    template: `
        
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos" :key="todo.todoId" :class="{'line-through': todo.completed}" @mouseover:>
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
    }


})


Vue.component('ToDoForm', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
      
        <p>
            <label for="title">Title:</label>
            <input id="title" v-model="title">
        </p>
        
        
        
        <p>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </p>
            
        <p>
            <input type="submit" value="Submit">  
        </p>    
  
    </form>
    `,
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