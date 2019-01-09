var frase= [];

frase[0] = "Bom dia lindão !!!"
frase[1] = "Boa tarde lindão !!!"
frase[2] = "Boa noite lindão !!!"

var horario = new Date()

var manha = horario.getHours();
var tarde = horario.getHours();
var noite = horario.getHours();

alert(horario)

    if (horario <= 12){
        alert(frase[0]);
    } else if (horario <= 18){
        alert(frase[1]);
    } else{
        alert(frase[2])
    }

