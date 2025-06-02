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

    async processPayment(){
      await new Promise((resolve)=>{
        setTimeout(()=>{
         this.status = "paid"
          resolve("Payment successful")
          console.log(`Your payment of order ${this.orderId} has been successful and the payment status is ${this.status}.`);
        },2000);
      })
    } 
}


  let order = new CustomerOrder("OD001",
    [ {name:"Laptop",quantity:10,price:150000},
     {name:"phone",quantity:15,price:55000},
      {name:"headphones",quantity:5,price:10000}],
  "pending")
 
 
 console.log(order.processPayment());
 
  console.log(order.calculateTotal());
   
 
 
  
  
  



// // Question 2
// // Create a TeamMember class that takes name, role, and an array of tasks (each task is an object with title and completed boolean). Write a prototype method completeTask(taskTitle) that marks a task as completed. Write another method checkProgress() that returns a Promise resolving to "All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tasks array.

// // pseudocodes
// // check if the task title exists in the array of objects which has the titles and the completion status of each task.
// // if ot is there, check the status of the tas
// // if it is true, mark it as completed
// // checkProgress by looking at all the completion status and use promises to resolve if it is completed and reject if all tasks are not completed.


class TeamMember{
    constructor(name,role,tasks){
        this.name = name
        this.role = role
        this.tasks = tasks
    }
}
TeamMember.prototype.completeTask = function(taskTitle){
let completedTasks = this.tasks.find(task => task.title === taskTitle)
if(completedTasks){
  completedTasks.completed = true;
  console.log(`Task ${taskTitle} for ${this.name} has been completed.`); 
}else{
  console.log(`Task ${taskTitle} is not availavle for ${this.name}`);
  
}
}

TeamMember.prototype.checkProgress = function(){
  return new Promise((resolve,reject)=>{
    let allCompletedTasks = this.tasks.every(task=>{ task.completed});
    if(allCompletedTasks){
      resolve("All tasks completed")
    }else{reject("Pending tasks remaining")}
      return allCompletedTasks
  })

}

let victoria = new TeamMember("victoria","student",[
    {title:"DAS", completion:false},
    {title:"js",completion: true}
])

victoria.completeTask("js")
victoria.checkProgress()
.then(result=> console.log(result))
.catch(error => console.log(error))



// Build a Candidate class with properties: name, position, and interviews (array of objects with date, status). Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview confirmed with [name]", and log the message.
class Candidate{
    constructor(name,position,interviews){
        this.name = name
        this.position = position
        this.interviews = interviews
    }
    scheduleInterviews(date){
        this.interviews.push({date,status:"pending"})
        return this.interviews
    }

async sendConfirmation(){
return  new Promise((resolve)=>{
  setTimeout(()=>{
if(this.interviews.status === "confirmed"){
}
resolve("Interview confirmed")
console.log(`${this.name} your interview has been confirmed.`);
  },1000)
})
}
}
let candidate = new Candidate("Ogega","machine learning engineer",[
    {date:"12-24-2025",status:"pending"},
    {date:"02-07-2025",status:"pending"},
    {date:"23-07-2025",status:"confirmed"}
])

console.log(candidate.scheduleInterviews("12-07-2025"));
console.log(candidate.sendConfirmation());




// // Design a Course class with properties: title, instructor, and students (array of student objects with name and progress). Add a method updateProgress(studentName, value) that modifies the student’s progress. Create an async method generateCertificate(studentName) that returns a Promise resolving only if the progress is 100, otherwise reject with "Incomplete progress".
// // pseudocode
// // create a class with its properties
// // create a method update Progress that modifies the students progress by replacing the old value with the new value
// // Create a method generate certificate that only gives certificates to students whose progress is 100 only. 



class Course{
    constructor(title,instructor,students){
this.title = title
this.instructor = instructor
this.students = students
    }
  updateProgress(studentName,value){
let studentProgress = this.students.find(student=> student.name === studentName)
if(studentProgress) studentProgress.progress = value
return this.students
}

async  generateCertificate(studentName) {
  return new Promise ((resolve,reject)=>{
    if(this.students.progress < 100){
   reject ("Incomplete progress")
   } else{ resolve(`${studentName} you have received your certificate, congratulatulations!!` ) }
  }) 
   
}
}


let course = new Course("Mathematics","Ochieng",[
    {name:"tesfay",progress:60},
    {name:"yordanos",progress:85},
    {name:"mahado",progress:100}

])

console.log(course.updateProgress("tesfay",79));
course.generateCertificate("mahado")
.then(result =>console.log(result))
.catch(error => console.log(error));





// // Create a StockTracker class with a property watchlist (array of objects with symbol, threshold, currentPrice). Add a method updatePrice(symbol, newPrice) that updates the stock’s current price. Write an async method checkAlerts() that loops through the watchlist and returns a Promise resolving with a list of stocks where currentPrice >= threshold, or rejecting with "No alerts triggered".

class StockTracker{
constructor(watchlist){
this.watchlist = watchlist
    }

updatePrice(symbol, newPrice){
 let updatedPrice = this.watchlist.find(price => price.symbol === symbol)
 if(updatedPrice) updatedPrice.currentPrice = value
 return this.watchlist  
}
}
async function checkAlerts() {
    return new Promise((resolve,reject)=>{
    const alerts = this.watchlist.filter( stock => stock.currentPrice >= stock.threshold)
    if(alerts.lenth > 0){resolve (alerts)}
    else{reject("No alerts triggered")}
    })  
     
}


let tracker = new StockTracker([{symbol:"aaa",threshold:"150, price:1500"},
    {symbol:"aaa",threshold:"150, price:1500"},
    {symbol:"ccc",threshold:"120, price:2500"},
    {symbol:"bbb",threshold:"100, price:500"}
])


console.log( tracker.updatePrice());
console.log(tracker.checkAlerts);



