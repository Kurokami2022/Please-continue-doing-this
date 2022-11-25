const sqlite3 = require('sqlite3').verbose();
let sql;
const db = new sqlite3.Database('login_data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

document.querySelector('#btnsub').addEventListener("click", (e) => {
    var user = document.getElementById('user').value;

    db.each(`SELECT username FROM users WHERE username = '${user}'`, 
    function (err, row) {
    var userval = row.username;
    localStorage.setItem("setuser", userval);
})
    var getuser = localStorage.getItem("setuser");

    if(getuser == user){
        location.href = "login2.html";
    } else {
        document.querySelector('#i1').style.background="red";
        document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error1').style.color = "red";
        document.getElementById('userspan').style.color="red";
    }
    
e.preventDefault();
})
