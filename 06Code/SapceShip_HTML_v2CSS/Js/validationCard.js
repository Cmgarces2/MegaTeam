const expressions = {
    onlyLetters: /^[a-zA-Z\s_\d]{1,30}$/,
    Card: /^.{16}$/,
    CCV: /^.{3}$/,
}

function validateCard() {
    var expRegCard = /^[0123456789\s]{16}$/;
    var UserCard = document.getElementById("txtCard");
    if (!expRegCard.exec(UserCard.value)) {
        alert("El numero de su tarjeta debe tener 16 digitos y sin letras.");

        return false;

    } else {

        return true;
    }
}

function validateFullName() {
    var expRegFullName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]{1,50}$/;
    var UserFullName = document.getElementById("txtNombre");
    if (!expRegFullName.exec(UserFullName.value)) {
        alert("El nombre solo debe tener caracteres.");

        return false;

    } else {

        return true;
    }
}

function validateCCV() {
    var expRegCCV = /^[0123456789\s]{3}$/;
    var UserCCV = document.getElementById("txtCCV");
    if (!expRegCCV.exec(UserCCV.value)) {
        alert("El numero de CCV debe tener 3 digitos y sin letras.");

        return false;

    } else {

        return true;
    }
}