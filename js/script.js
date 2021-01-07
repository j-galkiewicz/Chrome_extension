//the variable to hold the name
var userNickName;
var text;

//opening the settings field (new css class)
function openSet() {
    document.getElementById("set").classList.toggle("set-open"); //classlist.toggle -> adding a css element
}

//closing the settings field (new css class)
function closeSet() {
    document.getElementById("set").classList.toggle("set-close"); 
}

//event listener that triggers the funciton whenever the settings button is clicked
//set button - open
document.getElementById("set-button").addEventListener('click', openSet);
//nickname button
document.getElementById("nickname-button").addEventListener('click', closeSet);

//holding the name, if nothing
function saveNickName() {
    localStorage.setItem('receivedNickName', userNickName); //1st argument is a keyword to get the info, 2nd argument - info that has to be rememeber                                          
    userNickName = localStorage.getItem('receivedNickName');
}
//more user options to enter names  
function changeNickName() {
    if(userNickName = document.getElementById("nickname-input").value == "") {
        userNickName = "Stranger";
    } else if(userNickName = document.getElementById("nickname-input").value == "ABC") { 
        userNickName = "Buddy";
    } else {
        userNickName = document.getElementById("nickname-input").value;
    };
    saveNickName();  
    getHelloMessage();
}

//the loop of the footer text
switch (new Date().getDay()) {
    default: 
      text = "Every dog has his dog day";
      break;
    case 6:
      text = "Today is Saturday - the Dog Day";
      break; 
    case 0:
      text = "Today is Sunday - the Dog Day";
  }
document.getElementById("day").innerHTML = text;

//various "hello messages" depending on the user input
function getHelloMessage() {
    document.getElementById("hello").innerHTML = `Hello, ${userNickName}. In case you forgot - you're a good boy 🐶`;
    openSet();
}

function getHelloMessage2() {
    document.getElementById("hello").innerHTML = `Czesc, ${userNickName}. In case you forgot - you're a good boy 🐶`;
    openSet();
}

document.getElementById("nickname-form").addEventListener('submit', function(e) {
    e.preventDefault();
    changeNickName();
})
