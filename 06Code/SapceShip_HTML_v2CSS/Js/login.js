const expressions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/,
	password: /^.{4,12}$/,
    phone: /^.{10}$/,
    onlyLetters: /^[a-zA-Z\s_\d]{1,30}$/,
}

function validateUser(){
    var expReguser = /^[a-zA-Z0-9\_\-]{4,16}$/;
    var userName = document.getElementById("usr");
    if (!expReguser.exec(userName.value)){
        
		document.querySelector(`#mensaje-error-usr`).classList.add('input-error-enabled');
		document.querySelector(`#usr`).classList.add('input-error-border');

        return false;

    } else{
        document.querySelector(`#mensaje-error-usr`).classList.remove('input-error-enabled');
		document.querySelector(`#usr`).classList.remove('input-error-border');
        
        return true;
    }
}

function validateFullName(){
    var expRegFullName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    var UserFullName = document.getElementById("txtName");
    if (!expRegFullName.exec(UserFullName.value)){

		document.querySelector(`#mensaje-error-txtName`).classList.add('input-error-enabled');
		document.querySelector(`#txtName`).classList.add('input-error-border');

        return false;

    } else{

        document.querySelector(`#mensaje-error-txtName`).classList.remove('input-error-enabled');
		document.querySelector(`#txtName`).classList.remove('input-error-border');

        return true;
    }
}

function validatePhone(){
    var expRegPhone = /^\d{7,10}$/;
    var UserPhone = document.getElementById("txtphoneNumber");
    if (!expRegPhone.exec(UserPhone.value)){

		document.querySelector(`#mensaje-error-txtphoneNumber`).classList.add('input-error-enabled');
		document.querySelector(`#txtphoneNumber`).classList.add('input-error-border');

        return false;

    } else{

        document.querySelector(`#mensaje-error-txtphoneNumber`).classList.remove('input-error-enabled');
		document.querySelector(`#txtphoneNumber`).classList.remove('input-error-border');
    
        return true;
    }
}

function validateEmail(){
    var expRegEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var UserEmail = document.getElementById("txtMail");
    if (!expRegEmail.exec(UserEmail.value)){

		document.querySelector(`#mensaje-error-txtMail`).classList.add('input-error-enabled');
		document.querySelector(`#txtMail`).classList.add('input-error-border');

        return false;

    } else{

        document.querySelector(`#mensaje-error-txtMail`).classList.remove('input-error-enabled');
		document.querySelector(`#txtMail`).classList.remove('input-error-border');
    
        return true;
    }
}

function validatePassword(){
    var expRegName = /^.{4,12}$/;
    var passwordName = document.getElementById("pwd");
    if (!expRegName.exec(passwordName.value)){

		document.querySelector(`#mensaje-error-pwd`).classList.add('input-error-enabled');
		document.querySelector(`#pwd`).classList.add('input-error-border');

        return false;

    } else{

        document.querySelector(`#mensaje-error-pwd`).classList.remove('input-error-enabled');
		document.querySelector(`#pwd`).classList.remove('input-error-border');

        return true;
    }
}

function validateDirection(){
    var expRegdirec = /^[a-zA-Z0-9\_\-\s]{4,50}$/;
    var userdirec = document.getElementById("direc");
    if (!expRegdirec.exec(userdirec.value)){
        
		document.querySelector(`#mensaje-error-direc`).classList.add('input-error-enabled');
		document.querySelector(`#direc`).classList.add('input-error-border');

        return false;

    } else{
        document.querySelector(`#mensaje-error-direc`).classList.remove('input-error-enabled');
		document.querySelector(`#direc`).classList.remove('input-error-border');
        
        return true;
    }
}

function validateGeneric(){ 
    validateID();
    validar();
}

function validateID(){
    var expRegID = /^\d{10}$/;
    var UserID = document.getElementById("txtid");
    if (!expRegID.exec(UserID.value)){

		document.querySelector(`#mensaje-error-txtid`).classList.add('input-error-enabled');
		document.querySelector(`#txtid`).classList.add('input-error-border');

        return false;

    } else{

        document.querySelector(`#mensaje-error-txtid`).classList.remove('input-error-enabled');
		document.querySelector(`#txtid`).classList.remove('input-error-border');
    
        return true;
    }
}

function validar() {
    var cad = document.getElementById("txtid").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10){
      for(i = 0; i < longcheck; i++){
        if (i%2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i)); 
        }
      }

      total = total % 10 ? 10 - total % 10 : 0;

      if (cad.charAt(longitud-1) == total) {
        document.getElementById("salida").innerHTML = ("Cedula Válida");
        
      } else {
        document.getElementById("salida").innerHTML = ("Cedula Inválida");
        
      }
    } else {
        document.getElementById("salida").innerHTML = ("");
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