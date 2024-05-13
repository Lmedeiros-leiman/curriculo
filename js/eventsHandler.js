
// TODO: passar a mudança de icone para uma classe em um arquivo exclusivo.
// quando a pessoa clica para visualizar outra página

let FavMetaTimeout;
document.onblur = () => {
    FaviconChange("blur")
    
}

// quando a pessoa clica para visualizar esta página
document.onfocus = () => {
    FaviconChange("focus")

}
