document.addEventListener("DOMContentLoaded", function() {
        var mainButton = document.createElement('button');
        mainButton.className = "myButton";
        mainButton.innerText = "Click Here!";        
        mainButton.addEventListener("click", buttonClick);        
        document.body.appendChild(mainButton);
        
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
    document.body.appendChild(divBox);  
    // divBox.addEventListener("dblclick", divRemove);  
    // document.body.appendChild(divBox);  
    
      
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

// function divRemove(e) {
//     var divRem = 
// }


    


//USE THE SAME KIND OF PROCESS FROM THE NUMBER REMOVAL, TO REMOVE THE DIV

//FOR ODD OR EVEN CODE, IF/ELSE FUNCTION
