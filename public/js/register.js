//const deployURL="http://localhost:3000/";
const deployURL="https://intense-lowlands-69751.herokuapp.com/";

const registerURL = deployURL+'api/register/';

document.getElementById("register-form").action =registerURL;
console.log(document.getElementById("register-form").action);
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function checkMsg(){
    let msg=urlParams.get("msg");
    if(msg){
        alert(msg);
    }
}
window.onload = () => {
    checkMsg();
  };

function checkForm(){
    let name = document.getElementById("username").value;　
    console.log(name);
    let password = document.getElementById("password").value;　
    console.log(password);
    let position = document.getElementById("position").value;　
    console.log(position);
    if(!name||name==""){
        alert("username mustn't be empty.");
        return false;
    }
    if(!password||password==""){
        alert("password mustn't be empty.");
        return false;
    }
    if(!position||position==""){
        alert("position mustn't be empty.");
        return false;
    }


　　return true;
}

