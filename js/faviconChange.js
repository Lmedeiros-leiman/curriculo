const FaviconChange = (action = "blur") => {

    if (FaviconIntervalID) {
        clearTimeout(FaviconIntervalID)
        FaviconIntervalID = undefined
    }

    if (action == "blur") {
        FaviconIntervalID = setTimeout(() => {
            Favmeta.href = "assets/icons/faviconblur.ico"
            FaviconIntervalID = undefined
            // 1 minuto ainda parece muito agressivo.
            // mas ainda assim, é um detalhe pequeno e facil de perder.
        }, Minuto)
    } else 
    {
        const CurrentHref = Favmeta.href.split("/")

        if (CurrentHref[CurrentHref.length - 1] === 'faviconblur.ico') {
        
            Favmeta.href = "assets/icons/faviconchange.ico"

            FavMetaTimeout = setTimeout(() => {
                Favmeta.href = "assets/icons/favicon.ico"
                FavMetaTimeout = undefined
            }, 500)
        }
    }


    

    FaviconIntervalID 


}