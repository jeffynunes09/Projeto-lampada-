//passo 1 criar variaveis

// passo 2 criar funcoes de ligar e deslidar lamp 

//criar evento de acionar os botoes

//passo 3 criar funcoes de ligar lamp ao passa mouse

// passo 4 criar evento de quebrar lamp

// passo 5 criar funcao que nao deixa ligar quando quebrada 


const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp1 = document.getElementById("lamp1");


function isLampBroken() {
    return lamp1.src.indexOf('quebrada') > -1
}


function lampOn() {
    if (!isLampBroken()) {
        lamp1.src = "./img/ligada.jpg";
    }
}

function lampOff() {

    if (!isLampBroken()) {

        lamp1.src = "./img/desligada.jpg";
    }
}

function lampBroken() {
    lamp1.src = "./img/quebrada.jpg";
}




turnOff.addEventListener("click", lampOff);
turnOn.addEventListener("click", lampOn);
lamp1.addEventListener("mouseover", lampOn);
lamp1.addEventListener("mouseleave", lampOff);
lamp1.addEventListener("dblclick", lampBroken);

