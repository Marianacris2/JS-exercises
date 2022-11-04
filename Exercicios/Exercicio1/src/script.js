
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
    var anoNasc = 2011//window.document.getElementsByName('anoNasc');
    var fem = window.document.getElementById('fem');
    var masc = window.document.getElementById('masc');
    var res = window.document.getElementById('res');
    var msg = window.document.getElementById('msg');
     
    if(anoNasc > 2010){
        img.src = "../imgs/bebe.jpg"
        msg.innerHTML = 'Você é criança';
    }else if(anoNasc > 1980 && anoNasc < 2008){
        img.src = "../imgs/menina.jpg"
        msg.innerHTML = 'Você é jovem!';
    }else{
        img.src = "../imgs/idosa.jpg"
        msg.innerHTML = 'Você é Idosa!';
    }
}
