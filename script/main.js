function tocaSomPom() {
    return document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap() {
    return document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;



