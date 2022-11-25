const sqlite3 = require('sqlite3').verbose();
let sql;
const db = new sqlite3.Database('login_data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

document.querySelector('#btnsub').addEventListener("click", (e) => {

var pass = document.getElementById('pass').value;
var getuser = localStorage.getItem('setuser');

db.each(`SELECT password FROM users WHERE username = '${getuser}'`, 
function (err, row) {
var passval = row.password;
localStorage.setItem("setpass", passval);
})
var getpass = localStorage.getItem("setpass");

if(getpass == pass){
    location.href = "hello.html";
} else if(getpass != pass){
    document.querySelector('#i2').style.background="red";
    document.getElementById('i2').style.animation = "shake 0.2s ease-in-out 0s 4";
    document.getElementById('error2').style.color = "red";
    document.getElementById('error2').innerHTML="Incorrect password";
    document.getElementById('passpan').style.color="red";
} else if(pass == "" || pass == null){
    document.querySelector('#i2').style.background="red";
    document.getElementById('i2').style.animation = "shake 0.2s ease-in-out 0s 4";
    document.getElementById('error2').style.color = "red";
    document.getElementById('passpan').style.color="red";
} else {
    document.querySelector('#i2').style.background="";
    document.getElementById('i2').style.animation = "";
    document.getElementById('error2').style.color = "";
    document.getElementById('passpan').style.color="";
}
e.preventDefault();
})