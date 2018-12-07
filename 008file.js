// Javascript Document
function clique(){
    // alert('Ok');  // Só para testar se está funcionando

    document.getElementById('fundo').style.backgroundColor="#000";
}

function troca(cor){
    if(cor == "vermelho"){
        document.getElementById("fundo").style.backgroundColor="red";
        // document.getElementById("quadrado").style.backgroundColor="#f0f";
    }else if(cor == "verde"){
        document.getElementById("fundo").style.backgroundColor="green";
    }else{
        document.getElementById("fundo").style.backgroundColor="yellow";
    }
}