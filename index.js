// question 1
// Create a CustomerOrder class with properties: orderId (string), items (array of objects with name, quantity, price), and status (string). Add a method calculateTotal() that returns the total order amount. Write an async method processPayment() that simulates payment with a Promise that resolves after 2 seconds. After calling the method, change the status to "paid" and print a success message.

// pseudocode
//  Calculate total  amount by finding the product of quantity and price for each item
//  Simulate payment with a 2-second delay
//  Once payment has been made, change the  status to "paid" and print a success Message.

class CustomerOrder{
    constructor(orderId,items,status){
        this.orderId = orderId
        this.items = items
        this.status = status
    }
    calculateTotal() {
   return this.items.reduce((acc, item)=> acc + (item.quantity * item.price),0)
        }
}
async function processPayment() {
  await new Promise((resolve,reject)=> setTimeout(resolve,2000))
   if(this.status = "paid"){resolve(`Your payment of ${this.orderId} has been successful.`)}
}

let customer = new CustomerOrder("cu11",[
    {name:"waterbottle",quantity:2,price:1000},
    {name:"headphones",quantity:1,price:2500},
    {name:"stickynotes",quantity:2,price:250}
])


console.log(customer.processPayment);
 console.log(customer.calculateTotal());
  



// Question 2
// Create a TeamMember class that takes name, role, and an array of tasks (each task is an object with title and completed boolean). Write a prototype method completeTask(taskTitle) that marks a task as completed. Write another method checkProgress() that returns a Promise resolving to "All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tasks array.
// pseudocodes
// check if the completion of a tsk is true
// if it is true, mark it as completed
// checkProgress by looking at all the completion status and use promises to resolve or reject.


class TeamMember{
    constructor(name,role,tasks){
        this.name = name
        this.role = role
        this.tasks = tasks
    }
}
TeamMember.prototype.completeTask = function(taskTitle){
let completionStatus=  this.tasks.filter(task => task.completion == true) 
completionStatus = "Completed"
return completionStatus
}

TeamMember.prototype.checkProgress = new Promise((resolve,reject)=>{
    resolve("All tasks completed")
    reject(`${this.tasks.completion == true} tasks remaining`)
})

let victoria = new TeamMember("victoria","student",[
    {title:"DAS", completion:false},
    {title:"js",completion: true}
])

console.log(victoria.completeTask());
console.log(victoria.checkProgress);




// Build a Candidate class with properties: name, position, and interviews (array of objects with date, status). Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview confirmed with [name]", and log the message.
class Candidate{
    constructor(name,position,interviews){
        this.name = name
        this.position = position
        this.interviews = interviews
    }
    scheduleInterviews(date){
        this.interviews.push({date:"12-07-2025",status:"pending"})
        return this.interviews
    }
}
async function sendConfirmation(){
await new Promise((resolve,reject)=> setTimeout(resolve,1000))
if(this.interviews.status === "confirmed"){
resolve("Interview confirmed")
console.log(`${this.name} your interview has been confirmed.`);
}

}

let candidate = new Candidate("Ogega","machine learning engineer",[
    {date:"12-24-2025",status:"pending"},
    {date:"02-07-2025",status:"pending"},
    {date:"23-07-2025",status:"confirmed"}
])
candidate.scheduleInterviews()
candidate.sendConfirmation()



// Design a Course class with properties: title, instructor, and students (array of student objects with name and progress). Add a method updateProgress(studentName, value) that modifies the student’s progress. Create an async method generateCertificate(studentName) that returns a Promise resolving only if the progress is 100, otherwise reject with "Incomplete progress".
// pseudocode
// create a class with its properties
// create a method update Progress that modifies the students progress by replacing the old value with the new value
// Create a method generate certificate that only gives certificates to students whose progress is 100 only. 



class Course{
    constructor(title,instructor,students){
this.title = title
this.instructor = instructor
this.students = students
    }
    updateProgress(studentName,value){
let updatedValues = {name:studentName,progress:value}
Object.assign(this.students,updatedValues)
return this.students
    }
}
async function generateCertificate(studentName) {
   new Promise ((resolve,reject)) 
   try{if(this.students.progress >= 100){
    resolve(`${studentName} you have received your certificate, congratulatuos!!` )
   } }catch(error){
    console.log("Incomplete progress.");
    
   } 
}

let course = new Course("Mathematics","Ochieng",[
    {name:"tesfay",progress:60},
    {name:"yordanos",progress:85},
    {name:"mahado",progress:100}

])
course.updateProgress()
course.generateCertificate()


// Create a StockTracker class with a property watchlist (array of objects with symbol, threshold, currentPrice). Add a method updatePrice(symbol, newPrice) that updates the stock’s current price. Write an async method checkAlerts() that loops through the watchlist and returns a Promise resolving with a list of stocks where currentPrice >= threshold, or rejecting with "No alerts triggered".
class StockTracker{
    constructor(watchlist,){
this.watchlist = watchlist
    }
updatePrice(symbol, newPrice){
    
}
}
async function checkAlerts() {
    
}