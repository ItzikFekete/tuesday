// test 
//shmuels change

// the function is how we get the button to adda new line
function getItem() {
    var nameField = document.getElementById('todow').value;

    var resultContainer = document.createElement('li');
    var taskList = document.querySelector(".todolist");
    taskList.appendChild(resultContainer);

    // textContent is how the line is actually being added
    resultContainer.textContent = nameField;
    document.getElementById('todow').value = "";
// the next 2 lines are for a button to appear 
    
    var doing1 = document.createElement('button');
    var doingBtnText = document.createTextNode("Doing");
    doing1.appendChild(doingBtnText);
    resultContainer.appendChild(doing1);
    doing1.addEventListener("click", moveItem); 
}

function moveItem() {
    var currentLi = this.parentNode;
    var doingList = document.querySelector(".doinglist");
    doingList.appendChild(currentLi);
    this.textContent = "Done";
}

// use an eventlistener for the event
var subButton1 = document.getElementById('submit1');
subButton1.addEventListener('click', getItem, false);