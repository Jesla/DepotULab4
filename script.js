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
    divNumber.className = "divNum";
    divBox.innerHTML = String(divNumber.length);
    document.body.appendChild(divBox);
    
    // function hoverNumber() {
    // var hovNum = document.getElementsByClassName("myDiv");
    // hovNum.addEventListener("onmouseover");
    // document.body.appendChild(divBox);
    
    
}
    
}



// assign ids to divs
// inner html of hte divs