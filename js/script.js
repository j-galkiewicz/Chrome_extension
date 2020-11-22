
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
        userNickName = "buddy";
    } else {
        userNickName = document.getElementById("nickname-input").value;
    };
    saveNickName();  
    getHelloMessage();

}

function getHelloMessage() {
    document.getElementById("hello").innerHTML = `Hello, ${userNickName}. In case you forgot - you're a good boy 🐶`;
    openSet();
}


document.getElementById("nickname-form").addEventListener('submit', function(e) {
    e.preventDefault();
    changeNickName();
})
