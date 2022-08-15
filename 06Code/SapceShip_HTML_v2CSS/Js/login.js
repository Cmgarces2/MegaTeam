const expressions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/,
	password: /^.{4,12}$/,
    phone: /^.{10}$/,
    onlyLetters: /^[a-zA-Z\s_\d]{1,30}$/,
}

function validateUser(){
    var expReguser = /^[a-zA-Z0-9\_\-]{4,16}$/;
    var UserName = document.getElementById("usr");
    if (!expReguser.exec(UserName.value)){
        alert("El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.");

        return false;

    } else{
    
        return true;
    }
}

function validatePhone(){
    var expRegPhone = /^.{10}$/;
    var UserPhone = document.getElementById("txtphoneNumber");
    if (!expRegPhone.exec(UserPhone.value)){
        alert("El numero de telefono debe tener 10 digitos.");

        return false;

    } else{
    
        return true;
    }
}

function validateFullName(){
    var expRegFullName = /^[a-zA-Z\s_\d]{1,30}$/;
    var UserFullName = document.getElementById("txtName");
    if (!expRegFullName.exec(UserFullName.value)){
        alert("El nombre solo debe tener caracteres.");

        return false;

    } else{
    
        return true;
    }
}



function validatePassword(){
    var expRegName = /^.{4,12}$/;
    var passwordName = document.getElementById('pwd');
    if (!(expRegName.plate).test(passwordName.value)){
        window.alert("La contraseña tiene que ser de 4 a 12 dígitos.");

        return false;

    } else{

        return true;
    }
}

function loging(){
    var user;
    var pass;

    user = document.getElementById("usr").value;
    pass = document.getElementById("pwd").value;

    if(user == "Daniel" && pass == "1234" || user == "Christian" && pass == "5678" || user == "Santiago" && pass == "hola1"|| user == "Erika" && pass == "noche2"){

        window.location = "index.html";

    }else{
        window.alert("Usuario o contraseña incorrecta, vuelva a ingresar.");
    }

}