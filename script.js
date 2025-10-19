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
const todoList = JSON.parse(localStorage.getItem("list")) || [];

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
    console.log(todoList)
    // document.querySelector(".js-todoDesc").innerHTML = todoList.join("<br>");
    localStorage.setItem("list", JSON.stringify(todoList));
}


    document.querySelector(".js-todoDesc").innerHTML = todoList.join("<br>");

// swap value practice
const numbers = [];
function swapValue(){
    let input = document.querySelector(".js-numInput");
    let value = input.value;
    let firstIndex = numbers[0];
    if(input){
    numbers.push(value);
    input.value = "";
    }
    if(numbers.length >= 2){
        let lastIndex = numbers.length -1;
        numbers[0] = numbers[lastIndex];
        numbers[lastIndex] = firstIndex;
        document.querySelector(".js-swapValue").innerHTML = numbers;
    }
    else if(numbers.length === 1){
        input.placeholder = "Add more number";
    }

    console.log(numbers);
}


//testing

const increaseNumArray = [];
function increaseNum(){
    let input = document.querySelector(".js-increaseNumInput");  
    let value = input.value;
    if(input){
        increaseNumArray.push(value);
        input.value = "";
    }
    else if(increaseNumArray.length === 1){
        input.placeholder = "Add more number";

    }

    for(let i = 0; i < increaseNumArray.length; i++){
       increaseNumArray[i] = Number(increaseNumArray[i]) +1;
        document.querySelector(".output").innerHTML = increaseNumArray.join(", ");

    }

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

