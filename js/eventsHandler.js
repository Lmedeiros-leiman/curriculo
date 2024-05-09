
// quando a pessoa clica para visualizar outra página
let FavMetaTimeout;
document.onblur = () => {

    if (FavMetaTimeout) {
        clearTimeout(FavMetaTimeout)
    }

    FavMetaTimeout = setTimeout(() => {
        Favmeta.href = "./assets/icons/faviconblur.ico"
        FavMetaTimeout = undefined
        // 1 minuto ainda parece muito agressivo.
        // mas ainda assim, é um detalhe pequeno e facil de perder.
    }, Minuto)
    //
}

// quando a pessoa clica para visualizar esta página
document.onfocus = () => {

    if (FavMetaTimeout) {
        clearTimeout(FavMetaTimeout)

        FavMetaTimeout = undefined
        if (Favmeta.href === "./assets/icons/faviconblur.ico") 
            {
                Favmeta.href = "./assets/icons/faviconchange.ico"

                FavMetaTimeout = setTimeout( () => {
                    Favmeta.href = "./assets/icons/favicon.ico"
                    FavMetaTimeout = undefined
                }, 500)
            }
        
    }
    
}
