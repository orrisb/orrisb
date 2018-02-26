var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world welcome to Cannabis in Action Coalition!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pexels.jpg') {
      myImage.setAttribute ('src','images/website.jpg');
    } else {
      myImage.setAttribute ('src','images/pexels.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Getting Started with the Web is Cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Getting Started with the Web is Cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("dropdown");
    if (x.className === "dropdown") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
