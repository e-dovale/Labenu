
// Função validaEmail que trata todos os possíveis erros na digitação do e-mail: falta de '@', espaço, '.' ... 

function validaEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    emaildigitado = document.getElementById('idemail'); // captura o que foi digitado no campo email

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
        
        //exibe a mensagem de boas vindas
        document.getElementById('exibemsg').innerHTML = "Bem vindo " + emaildigitado.value + "!"; 

        //apaga na tela o e-mail digitado
        document.getElementById('idemail').value = "";

    }
    else {
        alert("E-mail invalido");

        //apaga a mensagem de boas vindas na tela, caso já tenha sido digiitado algum e-mail válido.
        document.getElementById('exibemsg').innerHTML = " ";

    };
}


