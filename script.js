// function for the simple math equation
function calculateAnswer(event){
   event.preventDefault();

   let number1 =  parseFloat(document.getElementById("number1").value);
   let operator = document.getElementById("operator").value.trim();
   let number2 =  parseFloat(document.getElementById("number2").value)
   let userAnswer = parseFloat(document.getElementById("userAnswer").value);

   let answer;


   if (operator === '+'){
        answer = number1 + number2;
    }
    else if (operator === '-'){
        answer = number1 - number2;
    }
    else if (operator === '*' || operator === 'x' || operator === 'X'){
        answer = number1 * number2;
    }
    else if (operator === '/'){
        answer = number1 / number2; 
    }

    else{
        document.getElementById("result").innerHTML = "wrong input";
        return;
    }

    if(userAnswer === answer){
        document.getElementById("result").innerHTML = "Correct";
    }
    else{
        document.getElementById("result").innerHTML = "Wrong the answer is " +  answer;
    }

}

// function for a To do list
const todoList = [];

function addTodo(){

    const todoInput = document.querySelector(".js-todoInput");
    const todoName = todoInput.value;

    if(todoName){
    todoList.push(todoName);
    todoInput.value ="";
    }

    for(let i = 0; i < todoList.length; i++){
        value = todoList[i];
        document.querySelector(".js-todoDesc").innerHTML = todoList.join("<br>");

    }

    // document.querySelector(".js-todoDesc").innerHTML = todoList.join("<br>");

}

function getLastValue(){
    const numbers = [10, 20, 30, 40];
    let input = document.querySelector(".js-numInput");
    let value = input.value;
    if(input){
    numbers.push(value);
    input.value = "";
    }
    let lastIndex = numbers.length-2;
    document.querySelector(".js-lastIndex").innerHTML = numbers[lastIndex];


}

/*
function testing(){
    const lists = [
        'testing1',
        'testing2',
        'testing3',
    ]

    for (let index = 0; index <= lists.length; index++) {
      const value = lists[index];
        console.log(value);

    }
}
*/

