
function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas!`;

    if(hora > 0 && hora < 12){
        img.src = '../imgs/manha.jpg';
        document.body.style.backgroundColor = '#f1da9b';
    }else if(hora >= 12 && hora <=18){
        img.src = '../imgs/tarde.jpg';
        document.body.style.backgroundColor = '#680005';
    }else{
        img.src = '../imgs/noite.jpg';
        document.body.style.backgroundColor = '#080745';
    }
}

function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('anoNasc');
    var res = document.querySelector('div#res');
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if(fano.value.length ==0 && fano.value.length >ano){    //verificando os anos 
        window.alert('Tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        if(fsex[0].checked){
            genero= 'homem';
            if(idade >=0 && idade< 10){
                //img.setAttribute('src', '../imgs/bebe.jpg');
            }else if( idade <21){
                //img.setAttribute('src', '../imgs/menino.jpg');
            }else if(idade < 50){
                //img.setAttribute('src', '../imgs/idoso.jpg');
            }   
        }else{
            genero = 'mulher';
            if(idade >=0 && idade< 10){
              //  img.setAttribute('src', '../imgs/bebe.jpg');
            }else if( idade <21){
                //img.setAttribute('src', '../imgs/meina.jpg');
            }else if(idade < 50){
                //img.setAttribute('src', '../imgs/idosa.jpg');
            }
        }
        res.innerHTML = `Detectamos uma pessoa de ${idade} anos e ${genero}`;
    }
}

function contar(){
    var inicio = document.getElementById('start');
    var fim = document.getElementById('end');
    var passo = document.getElementById('passe');
    var res = document.getElementById('res');
    res.innerHTML = '';

    for(var i = Number(inicio.value); i< Number(fim.value); i+=Number(passo.value)){
        res.innerHTML += `${i} - `;

    }
}
