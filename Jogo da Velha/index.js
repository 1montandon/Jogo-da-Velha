let jogador = "X";

let vitoria_X = 0;
let vitoria_O = 0;

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");
let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");
let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");

let placar = document.getElementById("placar");

function jogada(casa) {
    if (casa.innerHTML === "") {
        casa.innerHTML = jogador;
        alterna_jogador();
        verifica_ganhador();
        casa.style.animation = "aparece_letra 0.5s forwards";
    }

}
function alterna_jogador() {
    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
}

function verifica_ganhador() {
    if (casa01.innerHTML != "" && casa01.innerHTML === casa02.innerHTML && casa02.innerHTML === casa03.innerHTML) {
        alert(`Temos uma ganhador: ${casa01.innerHTML}`)
        temos_vencedor(casa01.innerHTML)
        reinicia()
    }
    else if (casa04.innerHTML != "" && casa04.innerHTML === casa05.innerHTML && casa05.innerHTML === casa06.innerHTML) {
        alert(`Temos uma ganhador: ${casa04.innerHTML}`)
        temos_vencedor(casa04.innerHTML)
        reinicia()
    }
    else if (casa07.innerHTML != "" && casa07.innerHTML === casa08.innerHTML && casa08.innerHTML === casa09.innerHTML) {
        alert(`Temos uma ganhador: ${casa07.innerHTML}`)
        temos_vencedor(casa07.innerHTML)
        reinicia()
    }
    else if (casa01.innerHTML != "" && casa01.innerHTML === casa04.innerHTML && casa04.innerHTML === casa07.innerHTML) {
        alert(`Temos uma ganhador: ${casa01.innerHTML}`)
        temos_vencedor(casa01.innerHTML)
        reinicia()
    }
    else if (casa02.innerHTML != "" && casa02.innerHTML === casa05.innerHTML && casa05.innerHTML === casa08.innerHTML) {
        alert(`Temos uma ganhador: ${casa02.innerHTML}`)
        temos_vencedor(casa02.innerHTML)
        reinicia()
    }
    else if (casa03.innerHTML != "" && casa03.innerHTML === casa06.innerHTML && casa06.innerHTML === casa09.innerHTML) {
        alert(`Temos uma ganhador: ${casa03.innerHTML}`)
        temos_vencedor(casa03.innerHTML)
        reinicia()
    }
    else if (casa01.innerHTML != "" && casa01.innerHTML === casa05.innerHTML && casa05.innerHTML === casa09.innerHTML) {
        alert(`Temos uma ganhador: ${casa01.innerHTML}`)
        temos_vencedor(casa01.innerHTML)
        reinicia()
    }
    else if (casa03.innerHTML != "" && casa03.innerHTML === casa05.innerHTML && casa05.innerHTML === casa07.innerHTML) {
        alert(`Temos uma ganhador: ${casa03.innerHTML}`)
        temos_vencedor(casa03.innerHTML1)
        reinicia()

    }
    else if (casa01.innerHTML != "" && casa02.innerHTML != "" && casa03.innerHTML != "" && casa04.innerHTML != "" && casa05.innerHTML != "" && casa06.innerHTML != "" && casa07.innerHTML != "" && casa08.innerHTML != "" && casa09.innerHTML != ""){
        alert(`Deu Velha!`)
        var img = document.createElement("img");
        img.src = "queen-elzabeth.gif";

        var div = document.getElementById("x");
        div.appendChild(img);
        img.setAttribute("style", "z-index: 3" , "align-content: center", "position: absolute");
    }
}
function temos_vencedor(vencedor) {
    if (vencedor === "X") {
        vitoria_X = vitoria_X + 1;
    }
    else {
        vitoria_O = vitoria_O + 1;
    }

    placar.innerHTML = `
    <p> X = ${vitoria_X}</p>
    <P> O = ${vitoria_O}</P>`
}

function reinicia() {
    casa01.innerHTML = "";
    casa02.innerHTML = "";
    casa03.innerHTML = "";
    casa04.innerHTML = "";
    casa05.innerHTML = "";
    casa06.innerHTML = "";
    casa07.innerHTML = "";
    casa08.innerHTML = "";
    casa09.innerHTML = "";
    div = "";
    x.innerHTML = "";
}
function reinciaPlacar() {
    vitoria_X = 0;
    vitoria_O = 0;
    placar.innerHTML = `
    <p> X = ${vitoria_X}</p>
    <P> O = ${vitoria_O}</P>`
    div = "";
    x.innerHTML = "";
}

