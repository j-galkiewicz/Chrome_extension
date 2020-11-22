
//opening the settings field
function openSet() {
    document.getElementById("set").classList.toggle("set-open"); //classlist.toggle -> adding a css element
}
//closing the settings field
function closeSet() {
    document.getElementById("set").classList.toggle("set-close"); 
}


document.getElementById("nickname-button").addEventListener('click', closeSet);

//event listener that triggers the funciton whenever the settings button is clicked
document.getElementById("set-button").addEventListener('click', openSet);


//a variable to hold the name
var userNickName;

function saveNickName() {
    localStorage.setItem('receivedNickName', userNickName); //1st argument is a keyword to get the info, 2nd argument - info that has to be rememeber                                          
    userNickName = localStorage.getItem('receivedNickName');
    if(userNickName == null) {
        userNickName = "buddy";
    }  
}
  
function changeNickName() {
    if(userNickName = document.getElementById("nickname-input").value == "") {
        userNickName = "stranger";
    } else if(userNickName = document.getElementById("nickname-input").value == "A") { 
        userNickName = "buddy";
    } else {
        userNickName = document.getElementById("nickname-input").value;
    };
    saveNickName();  
    getHelloMessage();

}

var text;
switch (new Date().getDay()) {
    default: 
      text = "Looking forward to the Weekend";
      break;
    case 6:
      text = "Today is Saturday - the Dog Day";
      break; 
    case 0:
      text = "Today is Sunday - the Dog Day";
  }
document.getElementById("day").innerHTML = text;

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
