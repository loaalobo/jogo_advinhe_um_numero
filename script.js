function verificaInput() {
    const palpiteUsuario = document.getElementById('palpiteUsuario').value;

    if (palpiteUsuario == '') {
        alert('Informe o seu palpite antes de prosseguir.')
    } else {
        joga();
    }
}

function recebeNumeroSorteado(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroSorteado;
}

function recebePalpite() {
    const palpiteUsuario = document.getElementById('palpiteUsuario').value;
    return palpiteUsuario;
}

function joga() {
    const numeroSorteado = recebeNumeroSorteado(1, 5);
    const palpiteUsuario = recebePalpite();

    if (palpiteUsuario == numeroSorteado) {
        alert('Parabéns! O número sorteado era ' + numeroSorteado + ' e você acertou em cheio!');
    } else if (palpiteUsuario == numeroSorteado -1 || palpiteUsuario == numeroSorteado + 1) {
        alert('Não foi dessa vez, mas seu palpite foi quente! O número sorteado era ' + numeroSorteado + ".")
    } else {
        alert('O número sorteado era ' + numeroSorteado + ". Você errou!");
    }      
}

