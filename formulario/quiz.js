import {game} from './game.js';
var list = []
    a = "Uma tosse nova e contínua"
    b = "Febre"
    c = "Cansaço"
    d = "Todas acima"
    res = "4"
    title = "Quais são os sintomas comuns de COVID-19?"
    img = "https://cdn.riddle.com/embeds/v2/images/q_80,f_png,c_fill,w_960,h_540/0c1/0c1b2468ffcd9f53f98d2c181daff801.png"
    jogo = new game(a, b, c, d, res, img, title);
    list.push(jogo);

    a = "Metanógenos"
    b = "Patógenos"
    c = "Fungos"
    d = "Bacteriófagos"
    res = "4"
    title = "O vírus que infectam bactérias são chamados?"
    img = "https://previews.123rf.com/images/sabelskaya/sabelskaya1707/sabelskaya170700667/82433444-conjunto-de-caracteres-feios-de-v%C3%ADrus-germe-e-bact%C3%A9rias-ilustra%C3%A7%C3%A3o-vetorial-dos-desenhos-animados-so.jpg"
    jogo = new game(a, b, c, d, res, img, title);
    list.push(jogo);

    a = "35-36ºC"
    b = "36-37ºC"
    c = "34-35ºC"
    d = "30-31ºC"
    res = "2"
    title = "Qual é a temperatura normal do corpo de um ser humano?"
    img = "https://cdn.riddle.com/embeds/v2/images/q_80,f_png,c_fill,w_960,h_540/046/04673f1cb08959239d125c4e39760617.png"
    jogo = new game(a, b, c, d, res, img, title);
    list.push(jogo);

    a = "Pequim"
    b = "Wahan"
    c = "Xangai"
    d = "Tianjin"
    res = "2"
    title = "Em qual dos locais a seguir foi identificado o primeiro caso de novo coronavírus?"
    img = "https://cdn.riddle.com/embeds/v2/images/q_80,f_png,c_fill,w_960,h_540/0a3/0a396a8a2b30891df7a6fd2c7904a5a0.png"
    jogo = new game(a, b, c, d, res, img, title);
    list.push(jogo);

    a = "1-14 Dias"
    b = "5-25 Dias"
    c = "10-15 Dias"
    d = "40-50 Dias"
    res = "1"
    title = "Qual é a duração do período de incubação do COVID-19?"
    img = "https://cdn.riddle.com/embeds/v2/images/q_80,f_png,c_fill,w_960,h_540/bc3/bc3c039838e114a14a37502b7840264b.png"
    jogo = new game(a, b, c, d, res, img, title);
    list.push(jogo);

    a = "Jovens adultos"
    b = "Só mulheres"
    c = "Crianças"
    d = "Bebês"
    res = "1"
    title = "Ao contrário do COVID-19, que afeta predominantemente pessoas mais velhas que a gripe espanhola tem como alvo principal?"
    img = "https://cdn.riddle.com/embeds/v2/images/q_80,f_png,c_fill,w_960,h_540/172/1725e5f59874ac399ab646a15b2b0334.png"
    jogo = new game(a, b, c, d, res, img, title);
    list.push(jogo);

    a = "Através de gotículas que saem de sua boca e nariz quando você tosse ou expira"
    b = "Bebendo água suja"
    c = "Tudo acima"
    d = ""
    res = "1"
    title = "Como o COVID-19 é transmitido?"
    img = "https://media.istockphoto.com/vectors/green-cartoon-coronavirus-covid19-vector-id1216756444?s=612x612"
    jogo = new game(a, b, c, d, res, img, title);
    list.push(jogo);

    a = "Sim - mas apenas se você usar lixívia forte"
    b = "Sim - sabão e água normais ou desinfetante para as mãos são suficientes"
    c = "Não - lavar as mãos não para COVID-19"
    d = ""
    res = "2"
    title = "Lavar as mãos pode protegê-lo do COVID-19?"
    img = "https://www.rbsdirect.com.br/imagesrc/17383078.jpg?w=700"
    jogo = new game(a, b, c, d, res, img, title);
    list.push(jogo);

    a = "Sim - pessoas com HIV têm sistemas imunológicos mais fracos"
    b = "Não - as pessoas que aderem ao tratamento anti-retrovial e têm uma contagem de CD4 elevada não correm mais risco"
    c = ""
    d = ""
    res = "2"
    title = "As pessoas que vivem com HIV estão sempre em maior risco?"
    img = "https://cdn.riddle.com/embeds/v2/images/q_80,f_png,c_fill,w_960,h_540/333/333beb6c4466ac276bc987c8013a2baa.png"
    jogo = new game(a, b, c, d, res, img, title);
    list.push(jogo);

    a = "Uma pessoa chamada Corona o identificou"
    b = "Devido às projeções em forma de folha"
    c = "Devido às projeções em forma de coroa"
    d = ""
    res = "3"
    title = "De onde veio o nome do coronavírus?"
    img = "https://i0.wp.com/www.hospitalinfantilsabara.org.br/wp-content/uploads/2020/01/shutterstock_1624413559.jpg?fit=1000%2C568&ssl=1"
    jogo = new game(a, b, c, d, res, img, title);
    list.push(jogo);

const imagem = document.querySelector("#imagem")
const titulo = document.querySelector("#titulo")
const A = document.querySelector("#escolha-a")
const B = document.querySelector("#escolha-b")
const C = document.querySelector("#escolha-c")
const D = document.querySelector("#escolha-d")
const contador = document.querySelector("#contador")
const texto = document.querySelector("#escolha")
const refazer = document.querySelector("#refazer")

var a, b ,c, d, res ,img, title, con, jogo, acertos;


function formar(game) {
    imagem.src =game.img;
    titulo.innerHTML = game.titulo;
    A.innerHTML = game.A;
    B.innerHTML = game.B;
    C.innerHTML = game.C;
    D.innerHTML = game.D;
    contador.innerHTML = con;
}


let index = 0;
con = index + 1;
acertos = 0;

function validar(elemento) {
    var num = elemento.dataset.number
        if (list.length > index ) {
            if (list[index].validador(num)) {
                elemento.classList.add('certo');
                    setTimeout(() => {
                    elemento.classList.remove('certo');
                }, 300)
                acertos++;
            }
            else{
                elemento.classList.add('errado');
                setTimeout(() => {
                    elemento.classList.remove('errado');
                }, 300)
                }
                index++; 
                con++;
                formar(list[index]); 
        }     
}

A.addEventListener("click", function(){validar(A)}, false);
B.addEventListener("click", function(){validar(B)}, false);
C.addEventListener("click", function(){validar(C)}, false);
D.addEventListener("click", function(){validar(D)}, false);
formar(list[index])
setInterval(() => {
    if(index == list.length){
        resultado();
    }
}, 1000);

function resultado() {
    imagem.src = avaliacaoImagem(acertos);
    titulo.innerHTML = `Sua pontuação ${acertos}/10!`; 
    texto.innerHTML = avaliacaoTexto(acertos);
    refazer.innerHTML = "";
    var botao = document.createElement("button");
    botao.innerText = "Refazer";
    refazer.appendChild(botao);
    botao.addEventListener("click", function (){
        window.location.href = "index.html"
    })
    refazer.classList.add('button');
}

function avaliacaoTexto(acertos) {
    if(acertos < 6){
        return "Você ainda tem o que aprender sobre o COVID-2019.";
    } else if (acertos < 9){
        return "parabens você sabe bastante sobre o COVID-2019.";
    } else{
        return "Uau você é um especialista sobre o COVID-2019"
    }
}
function avaliacaoImagem(acertos) {
    if(acertos < 6){
        return "https://memegenerator.net/img/images/15189217/bob-esponja-das-cavernas.jpg";
    } else if (acertos < 9){
        return "https://lh5.googleusercontent.com/proxy/3qTZ8d5lucKelKRtpUxq6uKZx-jaopdytsgHwk0H8p8zYA-sLyb-Hy4hcvl9t9-IQzy7iwpd-hxQgRVutUt1kwIlC5qYa28n=w1200-h630-p-k-no-nu";
    } else{
        return "https://i1.wp.com/insightsandthoughts.com.br/wp-content/uploads/2017/11/Minions-despicable-me-minions-38654511-1920-1200-840x577.jpg?resize=825%2C510&ssl=1"
    }
}




    
    
    



