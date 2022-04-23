var jogador,vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

function escutarEventoOnClick(id){
    if(vencedor!==null) return;                     //break no jogo todo
    var quadrado = document.getElementById(id);     //Diz ao js onde modificar
    if(quadrado.innerHTML!=='-') return;            //lógica para verificar e acionar o break

    quadrado.innerHTML = jogador;                   //js modifica inserindo texto na div selected
    quadrado.style.color = '#fff';                  //js modifica inserindo style na div selected

    jogador==='X' ?  jogador = 'O' : jogador = 'X'; //Lógica para mudar o jogador
    mudarJogador(jogador);
    checarVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

//-------- prototipagem verbosa : basica para verificar jogador------
function checarVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);
    
    let aux = 0;
    for(i=1;i<=9;i++){
        let empate = document.getElementById(i);
        if(empate.innerHTML !== '-'){
            aux++;}
                      }
    if(aux==9) {
        vencedorSelecionado.innerHTML = 'empate';
        return;
               }

    if(checarSequencia(quadrado1, quadrado2, quadrado3)){
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado4, quadrado5, quadrado6)){
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if(checarSequencia(quadrado7, quadrado8, quadrado9)){
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if(checarSequencia(quadrado1, quadrado4, quadrado7)){
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado2, quadrado5, quadrado8)){
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if(checarSequencia(quadrado3, quadrado6, quadrado9)){
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    if(checarSequencia(quadrado1, quadrado5, quadrado9)){
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado3, quadrado5, quadrado7)){
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
}
function checarSequencia(quadrado1,quadrado2,quadrado3){
    var endgame = false;

    if(quadrado1.innerHTML!=='-' & quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        endgame = true;
    }
    return endgame;
}

function mudaCorQuadrado(quadrado1,quadrado2,quadrado3){
    quadrado1.style.background = 'rgb(77, 219, 34)';
    quadrado2.style.background = 'rgb(77, 219, 34)';
    quadrado3.style.background = 'rgb(77, 219, 34)';
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML='';
    for(let i = 1; i<= 9; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background='rgba(179, 176, 176, 0.479)';
        quadrado.style.color='#eee';
        quadrado.innerHTML = '-';
    }

    
    mudarJogador('X');
}
//----------


//----------Controle de jogo: inicializar jogador
mudarJogador('X');