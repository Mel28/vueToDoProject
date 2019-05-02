// the todos are the models of the app

/*let todos = [
    {
        name:"Submit Mile stone project number 4",
        description: "Finish ReadMe doc and make final commits and deployments",
        //order: "0",
        complete: true,
    },
    {
        name:"Take cat to the vet",
        order: "1",
        description: "Take cat to the vet on Saturday for annual injection",
        complete: false,
    },
    {
        name: "Submit Milestone project number 5",
        description: "create bug tracking app and blog including use of shopping cart/stripe secure payment. Using django frameworks",
        order:"2",
	    complete: false,
    },
    {
        name: "Practise piano",
        description: "learn a new chord each week",
        order:"3",
        complete: false,
    }

    //All Vue applications are initialized with a `new Vue()` method call. The object that is passed to the method call is the configuration for our whole application.
var todoapp = new Vue({

    el: '#app',

   data: {
    appName: 'To Do List',
    todos: [
        {name:"Submit Mile stone project number 4", description: "Finish ReadMe doc and make final commits and deployments", order: 0, complete: true},
        {
            name:"Take cat to the vet",
            order: 1,
            description: "Take cat to the vet on Saturday for annual injection",
            complete: false
        },
        {
            name: "Submit Milestone project number 5",
            description: "create bug tracking app and blog including use of shopping cart/stripe secure payment. Using django frameworks",
            order: 2,
            complete: false
        },
        {
            name: "Practise piano",
            description: "learn a new chord each week",
            order:3,
            complete: false
        }
    
    ]
   
   }


});
]*/

let todos = [
    {name:"Submit Mile stone project number 4", description: "Finish ReadMe doc and make final commits and deployments", order: 0, complete: true},
    {
        name:"Take cat to the vet",
        order: 1,
        description: "Take cat to the vet on Saturday for annual injection",
        complete: false
    },
    {
        name: "Submit Milestone project number 5",
        description: "create bug tracking app and blog including use of shopping cart/stripe secure payment. Using django frameworks",
        order: 2,
        complete: false
    },
    {
        name: "Practise piano",
        description: "learn a new chord each week",
        order:3,
        complete: false
    }

]



 //All Vue applications are initialized with a `new Vue()` method call. The object that is passed to the method call is the configuration for our whole application.
 
new Vue({
    
    el:`#app`,

    /**
     * The template for the application defines the basic structure of its HTML.
     */
    template:"#app-template",

    /**
     * The data method is called by the component, and the values returned become the data model for that component.
     * The todos being passed here are defined at the top of this file.
     */
    data:()=>(
        {
            todos,
            text:``,
            showComplete:true,
        }
    ),

    /**
     * Computed properties are like data, except instead of a specific value, they are a function. The function is called and then the component can use the value that is returned, like a normal property.
     * Computed properties can take various factors into account - for example, the filteredTodos computed property is different depending on the status of the showComplete property of the application.
     */
    computed:{

        /**
         * Returns a list of todos with the completed ones removed, when the application is so configured.
         */
        filteredTodos(){
            return this.todos
                .filter(todo=>this.showComplete ? true : !todo.complete);
        },

       
    },

    /**
     * The methods property of a Vue app contains functions, which are usually called from the template, though they can be called from elsewhere in the script, too.
     * If you look in the template, you will find a form which calls this "addTodo()" method.
     * Methods are the preferred way of doing an action that changes the data model.
     */
    methods:{
        
        addTodo(){
            todos.push({
                name:this.text,
                complete:false
            });

        
             // Vue components can access their own properties through the "this" special keyword.
            
            this.text = ``;
           },
           removeToDo(){
           todos.splice({
            name:this.text,
            description:this.text
           });

           this.text = ``;
           }
        }
});
 

