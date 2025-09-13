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
    document.querySelector(".js-todoDesc").innerHTML = todoList.join("<br>");

}
