const posicaoSuperiorInicial = 70,
    posicaoEsquerdaInicial = 70,
    posicaoSuperiorFinal = 500,
    posicaoEsquerdaFinal = 500,
    anguloInicial = 0,
    anguloFinal = 360,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window.getComputedStyle(imgAvatar),
    txtPixel = document.getElementById("txtPixel");

var posicaoSuperior = 70,
    posicaoEsquerda = 70,
    topAvatar,
    leftAvatar,
    anguloAvatar = 0;

imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";
imgAvatar.style.left = posicaoEsquerda + "px";
imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";

function getTopStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('top').replace("px", ''));
}

function getLeftStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('left').replace("px", ''));
}

function moverParaEsquerda() {
    console.clear();
    console.log("Posição do avatar à esquerda antes: ", imgAvatar.style.left);
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar > posicaoEsquerdaInicial) {
        posicaoEsquerda -= parseInt(txtPixel.value);
        if (posicaoEsquerda < posicaoEsquerdaInicial) {
            posicaoEsquerda = posicaoEsquerdaInicial;
        }
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda depois: ", imgAvatar.style.left);
}

function moverParaDireita() {
    console.clear();
    console.log("Posição do avatar à esquerda antes: ", imgAvatar.style.left);
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar < posicaoEsquerdaFinal) {
        posicaoEsquerda += parseInt(txtPixel.value);
        if (posicaoEsquerda > posicaoEsquerda) {
            posicaoEsquerda = posicaoEsquerdaFinal;
        }
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para direita. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda depois: ", imgAvatar.style.left);
}

function moverParaCima() {
    console.clear();
    console.log("Posição superior do avatar antes: ", imgAvatar.style.top);
    topAvatar = getTopStyle(imgAvatar);
    if (topAvatar > posicaoSuperiorInicial) {
        posicaoSuperior -= parseInt(txtPixel.value);
        if (posicaoSuperior < posicaoSuperiorInicial) {
            posicaoSuperior = posicaoSuperiorInicial;
        }
        imgAvatar.style.top = posicaoSuperior + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para cima. Tente outro botão.");
    }
    console.log("Posição superior do avatar depois: ", imgAvatar.style.top);
}

function moverParaBaixo() {
    console.clear();
    console.log("Posição superior do avatar antes: ", imgAvatar.style.top);
    topAvatar = getTopStyle(imgAvatar);
    if (topAvatar < posicaoSuperiorFinal) {
        posicaoSuperior += parseInt(txtPixel.value);
        if (posicaoSuperior > posicaoSuperiorFinal) {
            posicaoSuperior = posicaoSuperiorFinal;
        }
        imgAvatar.style.top = posicaoSuperior + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para cima. Tente outro botão.");
    }
    console.log("Posição superior do avatar depois: ", imgAvatar.style.top);
}

function girarHorario() {
    console.clear();
    console.log("Ângulo do avatar antes: ", anguloAvatar + "deg");
    if(anguloAvatar < anguloFinal) {
        anguloAvatar += parseInt(txtPixel.value);
        if (anguloAvatar > anguloFinal) {
            anguloAvatar = anguloFinal;
        }
        imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais girar no sentido horário. Tente outro botão.")
    }
    console.log("Ângulo do avatar depois: ", anguloAvatar + "deg");
}

function girarAntiHorario() {
    console.clear();
    console.log("Ângulo do avatar antes: ", anguloAvatar + "deg");
    if(anguloAvatar > anguloInicial) {
        anguloAvatar -= parseInt(txtPixel.value);
        if (anguloAvatar < anguloInicial) {
            anguloAvatar = anguloInicial;
        }
        imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais girar no sentido antihorário. Tente outro botão.")
    }
    console.log("Ângulo do avatar depois: ", anguloAvatar + "deg");
}

function deslizarParaDireita() {
    console.clear();
    console.log("Ângulo do avatar antes: ", anguloAvatar + "deg");
    anguloAvatar -= parseInt(txtPixel.value);
    const novoLeft = Math.min(getLeftStyle(imgAvatar) + parseInt(txtPixel.value), posicaoEsquerdaFinal);

    if (novoLeft < posicaoEsquerdaFinal) {
        imgAvatar.style.transition = "left 1s ease-in-out";
        imgAvatar.style.left = novoLeft + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais deslizar para a direita. Tente outro botão.");
    }
}

function deslizarParaEsquerda() {
    console.clear();
    console.log("Ângulo do avatar antes: ", anguloAvatar + "deg");
    anguloAvatar -= parseInt(txtPixel.value);
    const novoLeft = Math.max(getLeftStyle(imgAvatar) - parseInt(txtPixel.value), posicaoEsquerdaInicial);

    if (novoLeft > posicaoEsquerdaInicial) {
        imgAvatar.style.transition = "left 1s ease-in-out";
        imgAvatar.style.left = novoLeft + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais deslizar para a esquerda. Tente outro botão.");
    }
}

function posicaoAleatoria() {
    var img = document.getElementById("imgAvatar");
    img.style.position = "absolute";
    img.style.left = Math.random() * (window.innerWidth - img.width) + "px";
    img.style.top = Math.random() * (window.innerHeight - img.height) + "px";
}

  function direçaoA() {
    var image = document.getElementById("imgAvatar");
    image.style.transform = "scaleX(-1)";
  }

  function direçaoB() {
    var image = document.getElementById("imgAvatar");
    image.style.transform = "scaleX(+1)";
  }


  function deslizarPosiçao() {
    var img = document.getElementById("imgAvatar");
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var randomX = Math.floor(Math.random() * (screenWidth - img.width));
    var randomY = Math.floor(Math.random() * (screenHeight - img.height));

    img.style.transition = "left 1s ease-in-out"; // Aplicando a transição na propriedade 'left'
    img.style.position = "absolute";
    img.style.left = randomX + "px";
    img.style.top = randomY + "px";
    img.style.left = (randomX + 100) + "px"; // Desliza o elemento 100 pixels para a direita
}