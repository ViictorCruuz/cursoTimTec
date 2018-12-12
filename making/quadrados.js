function clique(){
    // alert('Funcionando !!!')

    document.getElementById('fundo').style.backgroundColor = "#000";
}

function troca(cor){
    if(cor == 'vermelho'){
        document.getElementById('fundo').style.backgroundColor = "red";
        document.getElementById('quadrado').style.backgroundColor = "#F0F";
    }else if(cor == 'verde'){
        document.getElementById('fundo').style.backgroundColor = "green";
    }else{
        document.getElementById('fundo').style.backgroundColor = "yellow"
    };
}

function padrao(){
    document.getElementById('fundo').style.backgroundColor = "white"
}