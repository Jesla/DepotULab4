document.addEventListener("DOMContentLoaded", function() {
        var mainButton = document.createElement("button");
        mainButton.className = "myButton";
        mainButton.innerText = "Click Here!";        
        mainButton.addEventListener("click", buttonClick);        
        document.body.appendChild(mainButton);
        
        var bigDiv = document.createElement("div");
        bigDiv.id = "mainDiv";
        document.body.appendChild(bigDiv);        
     });          

function buttonClick() {
    var divNumber = document.getElementsByClassName("myDiv");
    var divBox = document.createElement("div");
    divBox.className = "myDiv";
    divBox.id = String(divNumber.length);
    divNumber.className = "divNum";
    divBox.addEventListener("mouseover", hoverNumber);
    document.body.appendChild(divBox);
    divBox.addEventListener("mouseout", hoverNumRemove);  
    document.body.appendChild(divBox);  
    divBox.addEventListener("click", colorChange);  
    document.body.appendChild(divBox);  //DIV REMOVAL CODE
    divBox.addEventListener("dblclick", boxRemove); //DIV REMOVAL CODE
    
    var addToMain = document.getElementById('mainDiv');
	    addToMain.appendChild(divBox);           
}

function hoverNumber(e) {
    e.target.innerHTML = e.target.id;
}

function hoverNumRemove(e) {
    e.target.innerHTML = "";    
}

function colorChange(e) {
    var divColorGen = (Math.random()*0xFFFFFF<<0).toString(16);
    e.target.style.backgroundColor = "#" + divColorGen;
}

function boxRemove() { //THIS WHOLE SECTION IS DIV REMOVAL CODE
    var divRem = String(divNumber.length);
    if (divRem % 2 === 0) {
        var evenRemove = document.getElementsByClassName("myDiv").nextElementSibling;
        evenRemove.parentNode.removeChild(evenRemove);
    } else if (divRem % 2 !== 0) {
        var oddRemove = document.getElementsByClassName("myDiv").previousElementSibling;
        oddRemove.parentNode.removeChild(oddRemove);
    } else if (divRem === null) {
        alert("The box does not exist"); //DOWN TO THIS LINE
    }
}
