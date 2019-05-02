// the todos are the models of the app

/*let todos = [
    {
        name:"Submit Mile stone project number 4",
        description: "Finish ReadMe doc and make final commits and deployments",
        order: "0",
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
]; */
  //template: 'app-template',

//All Vue applications are initialized with a `new Vue()` method call. The object that is passed to the method call is the configuration for our whole application.
var todoapp  = new Vue({

    el: '#app',

   data: {
    appName: 'To Do List',
    newTask: '',
    todos: [
        {
            name:"Submit Mile stone project number 4",
            description: "Finish ReadMe doc and make final commits and deployments",
            order: "0",
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
    ]

   }


});