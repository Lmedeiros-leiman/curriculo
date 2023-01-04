let alertado = false;
let indexmultiplicador = [];
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


const embrulhoscarroseis = document.querySelectorAll(".carrosel");
embrulhoscarroseis.forEach((embrulho,index) => {
    indexmultiplicador.push(0);
    embrulho.classList.remove("carrosel");
    embrulho.classList.add("embrulhocarrosel");

    let carrosel = document.createElement("div");
    carrosel.classList.add("carrosel");

    let listabolas = document.createElement("div");
    listabolas.classList.add("bolas");
    while (embrulho.childNodes.length > 0) {
        carrosel.appendChild(embrulho.childNodes[0]);
    }

    for ( var i = 0 ; i < carrosel.children.length; i++){
        listabolas.append(document.createElement("div"));
        if ( carrosel.children[i].tagName == ("IMG" || "PICTURE") && !alertado) {
            console.warn("Alerta carrosel: imagem detectada! \n " +
                "Por favor garantir que as imagens dentro do carrosel possuam o atributo \n" +
                "draggable=false \n" +
                "para garantir uma experiencia optimizada.");
            alertado = true;
            carrosel.children[i].setAttribute("draggable",false);
        }
        carrosel.children[i].style.backgroundColor = random_rgba();

    }

    let setas = [document.createElement("i"),document.createElement("i")];
    setas[0].classList.add("esquerda"); setas[1].classList.add("direita");

    carrosel.children[0].style.marginLeft = 0;

    setas.forEach((seta) => {
            let tamanhoprimeiroelemento = carrosel.children[1].width;
            seta.addEventListener("click", () => {
                let tamanhoprimeiroelemento = (carrosel.children[1].clientWidth) + 14;
                console.log("clicado.");


                if (seta.classList.contains("esquerda")) {
                    carrosel.scrollLeft -= tamanhoprimeiroelemento ;
                }else{
                    carrosel.scrollLeft += tamanhoprimeiroelemento ;
                }
                setTimeout(() => mostraresconderflechas(carrosel), 60);
            });
    });





    embrulho.append(listabolas);

    //setas
    carrosel.insertBefore(setas[0],carrosel.children[0]);
    carrosel.append(setas[1]);

    embrulho.append(carrosel)

    //seção addEventListener

    carrosel.addEventListener("mousedown",(evt) =>{ inicioescorrega(evt,carrosel,index)});
    carrosel.addEventListener("touchstart",(evt) =>{ inicioescorrega(evt,carrosel,index)});

    carrosel.addEventListener("mousemove",(evt) =>{escorrega(evt,carrosel,index)});
    carrosel.addEventListener("touchmove",(evt) =>{escorrega(evt,carrosel,index)});

    carrosel.addEventListener("mouseup",(evt) =>{fimescorrega(evt,carrosel,index)});
    carrosel.addEventListener("touchend",(evt) =>{fimescorrega(evt,carrosel,index)});
    carrosel.addEventListener("mouseleave",(evt) =>{fimescorrega(evt,carrosel,index)});

});



const inicioescorrega = (e,carrosel,index) => {
    carrosel.classList.add("iniciado");
    pagexantigo = e.pageX || e.touches[0].pageX;
    posicaoantiga = carrosel.scrollLeft;

}
const escorrega = (e,carrosel,index) => {
    if (!carrosel.classList.contains("iniciado")) return;
    e.preventDefault();
    diferencaposicao = (e.pageX || e.touches[0].pageX) - pagexantigo;
    carrosel.style.cursor = "grabbing";
    carrosel.scrollLeft = posicaoantiga - diferencaposicao;
    carrosel.classList.add("estapuxando");
    setTimeout(() => mostraresconderflechas(carrosel), 60); // a ser implementado

}
const fimescorrega = (e,carrosel,index) => {
    carrosel.classList.remove("iniciado");
    carrosel.style.cursor = "grab";

    if(!carrosel.classList.contains("estapuxando")) return;
    carrosel.classList.remove("estapuxando");

    autoescorrega(carrosel,index);
}
const mostraresconderflechas = (carrosel) =>{
    let tamanhobarra = carrosel.scrollWidth - carrosel.clientWidth;
    carrosel.children[0].style.display = carrosel.scrollLeft == 0 ? "none" : "block";
    carrosel.children[carrosel.children.length - 1].style.display = carrosel.scrollLeft == tamanhobarra ? "none" : "block";
}


const autoescorrega = (carrosel,index) => {
    let posicaoatual = carrosel.scrollLeft;

    if (posicaoatual > posicaoantiga) {

        if (indexmultiplicador[index] == carrosel.children.length - 1) {
            indexmultiplicador[index] = carrosel.children.length - 1;
        } else {indexmultiplicador[index]++;}

    } else {indexmultiplicador[index] = indexmultiplicador[index] - 1;}
    //testes de limite
    if (indexmultiplicador[index] < 0) {
        indexmultiplicador[index] = 0;
    }
    if (indexmultiplicador[index] >= carrosel.children.length) {
        indexmultiplicador[index] = carrosel.children.length;
    }

    //escorregasozinho para localização

    carrosel.scrollLeft = (carrosel.children[1].clientWidth + 14) * (indexmultiplicador[index]);

}