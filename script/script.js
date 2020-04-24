function validaEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    emaildigitado = document.getElementById('idemail');

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        alert("O email " + emaildigitado.value + " foi enviado");
        document.getElementById('divmsg').innerHTML = "Bem vindo " + emaildigitado.value + "!";
        
    }
    else {
        alert("E-mail invalido");
    };
}

