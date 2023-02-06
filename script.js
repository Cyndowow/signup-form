let create = document.getElementById("create");

create.addEventListener("click", function() {
    
    let pwd = document.querySelector("#pwd").value;
    let confirmPwd =  document.querySelector("#pwd_confirm").value;

    let error = document.querySelector("#error");

    if(pwd != confirmPwd) {
        error.innerText = "*Passwords do not match";
        document.getElementById("pwd").className = document.getElementById("pwd").className + " error";
        document.getElementById("pwd_confirm").className = document.getElementById("pwd_confirm").className + " error";
    }else if (pwd === confirmPwd) {
        document.getElementById("pwd").className = document.getElementById("pwd").className.replace(" error", "");
        document.getElementById("pwd_confirm").className = document.getElementById("pwd_confirm").className.replace(" error", "");
        document.querySelector("#error").innerText = "";
    }
});