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
    divBox.innerHTML = String(divNumber.length);
    document.body.appendChild(divBox);  
}

function hoverNumber() {
    var hovNum = document.getElementsByClassName()
}




// assign ids to divs
// inner html of hte divs