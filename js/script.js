function openSet() {
    document.getElementById("set").classList.toggle("set-open"); //classlist.toggle -> adding a css element
}

document.getElementById("set-button").addEventListener('click', openSet);

var userNickName = localStorage.getItem('receivedNickName');

function saveNickName() {
    localStorage.setItem('receivedNickName', userNickName); //1st argument is a keyword to get the info, 2nd argument - info that has to be rememeber                                          
}

if(userNickName == null) {
    userNickName = "buddy";
}  
  
function changeNickName() {
    userNickName = document.getElementById("nickname-input").value;
    saveNickName;  
}


document.getElementById("nickname-form").addEventListener('submit', function(e) {
    e.preventDefault();
    changeNickName;
})

function getHelloMessage() {
    document.getElementById("hello").innerHTML = `Hello ${userNickName}. In case you forgot - keep smiling!`;
}

getHelloMessage();