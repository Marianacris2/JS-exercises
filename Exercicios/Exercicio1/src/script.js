
function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = 2//data.getHours();
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

