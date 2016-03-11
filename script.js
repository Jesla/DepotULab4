document.addEventListener('DOMContentLoaded', function () {
    var mainButton = document.createElement('button');
    mainButton.className = 'myButton';
    mainButton.innerText = 'Click Here!';
    mainButton.addEventListener('click', buttonClick);
    document.body.appendChild(mainButton);

    var bigDiv = document.createElement('div');
    bigDiv.id = 'mainDiv';
    document.body.appendChild(bigDiv);
});

function buttonClick() {
    var divNumber = document.getElementsByClassName('myDiv');
    var divBox = document.createElement('div');
    divBox.className = 'myDiv';
    divBox.id = String(divNumber.length); // Sets the id of the box to be the length of the array from above (AKA, the number of boxes that were already in the page)
    divBox.addEventListener('mouseover', hoverNumber);
    divBox.addEventListener('mouseout', hoverNumRemove);
    divBox.addEventListener('click', colorChange);
    divBox.addEventListener('dblclick', boxRemove);

    var addToMain = document.getElementById('mainDiv');
    addToMain.appendChild(divBox);
}

function hoverNumber(e) {
    e.target.innerHTML = e.target.id;
}

function hoverNumRemove(e) {
    e.target.innerHTML = '';
}

function colorChange(e) {
    var divColorGen = (Math.random() * 0xFFFFFF << 0).toString(16);
    e.target.style.backgroundColor = '#' + divColorGen;
}

function boxRemove(e) {
    var dblClickedSquare = e.target;
    var boxIdNum = parseInt(dblClickedSquare.id, 10);
    if (boxIdNum % 2 === 0) { // If the double clicked box is even
        if (dblClickedSquare.nextElementSibling) { // If there is a next sibling (to the right)
            dblClickedSquare.nextElementSibling.remove();
        } else {
            alert('There is no box to remove'); // There was not a sibling to the right
            // There is nothing to the right of the square that was double clicked
        }
    } else {
        if (dblClickedSquare.previousElementSibling) {
            dblClickedSquare.previousElementSibling.remove();
        } else {
            alert('There is no box to remove');
        }
    }
}
