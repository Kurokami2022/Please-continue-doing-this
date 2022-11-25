document.querySelector('#btnsub').addEventListener("click", (e) => {
    var email = document.getElementById('email').value;

    if(email == "email"){
        location.href = "forgot2.html";
    } else {
        document.querySelector('#i1').style.background="red";
        document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error1').style.color = "red";
        document.getElementById('emailspan').style.color="red";
    }
e.preventDefault();
})
