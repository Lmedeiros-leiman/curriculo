
// quando a pessoa clica para visualizar outra página
let FavMetaTimeout;
document.onblur = () => {
    FavMetaTimeout = setTimeout(() => {
        Favmeta.href = "./assets/icons/faviconblur.ico"
    }, Minuto * 2)
    //
}

// quando a pessoa clica para visualizar esta página
document.onfocus = () => {

    if (FavMetaTimeout) {
        clearTimeout(FavMetaTimeout)
    }
    FavMetaTimeout = undefined
    Favmeta.href = "./assets/icons/favicon.ico"
}