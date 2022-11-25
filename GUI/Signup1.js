const sqlite3 = require('sqlite3').verbose();
let sql;
const db = new sqlite3.Database('login_data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

document.querySelector('#btnsub').addEventListener("click", (e) => {
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;

    if(user == null || user == ""){
        document.querySelector('#i1').style.background="red";
        document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error1').style.color = "red";
        document.getElementById('userspan').style.color="red";
    } else {
        document.querySelector('#i1').style.background="";
        document.getElementById('i1').style.animation = "";
        document.getElementById('error1').style.color = "";
        document.getElementById('userspan').style.color="";
    }
    if(email == null || email == ""){
        document.querySelector('#i2').style.background="red";
        document.getElementById('i2').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error2').style.color = "red";
        document.getElementById('emailspan').style.color="red";
    } else {
        
        document.querySelector('#i2').style.background="";
        document.getElementById('i2').style.animation = "";
        document.getElementById('error2').style.color = "";
        document.getElementById('emailspan').style.color="";
    }
    if(pass == null || pass == ""){
        document.querySelector('#i3').style.background="red";
        document.getElementById('i3').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error3').style.color = "red";
        document.getElementById('passpan').style.color="red";
    } else {
        
        document.querySelector('#i3').style.background="";
        document.getElementById('i3').style.animation = "";
        document.getElementById('error3').style.color = "";
        document.getElementById('passpan').style.color="";
    }
    if(cpass == null || cpass == ""){
        document.querySelector('#i4').style.background="red";
        document.getElementById('i4').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error4').style.color = "red";
        document.getElementById('cpasspan').style.color="red";
    } else {
        document.querySelector('#i4').style.background="";
        document.getElementById('i4').style.animation = "";
        document.getElementById('error4').style.color = "";
        document.getElementById('cpasspan').style.color="";
    }
    db.run(`INSERT INTO users(username, email, password, confirm_password) 
        VALUES('${user}','${email}','${pass}', '${cpass}')`);
        location.href = "signedup.html";

    e.preventDefault();
})