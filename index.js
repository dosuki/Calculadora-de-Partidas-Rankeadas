let win = 70
let loose = 30
let resultadoFinal = rank(win, loose)

function rank(win, loose){
    let saldo = win - loose
    let nivel
    
    if(win <= 10){
        nivel = "Ferro"
    }else if((win >= 11) && (win <= 20 )){
        nivel = "Bronze"
    }else if((win >= 21) && (win <= 50 )){
        nivel = "Prata"
    }else if((win >= 51) && (win <= 80 )){
        nivel = "Ouro"
    }else if((win >= 81) && (win <= 90 )){
        nivel = "Diamante"
    }else if((win >= 91) && (win <= 100 )){
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }
    console.log("O herói tem um saldo de " +saldo+ " pontos. E está no rank "+nivel)
}


