

console.log(userLanguage)

function TrocarLinguagem() { // this is going to become an annonymous function.
    const TrasnlatableElements = document.querySelectorAll("[translation]")
    // we fetch the translation documents from the repository
    const TranslationDocuments = (() => {


        return 1
    })()
    const TranslationDocument = new XMLHttpRequest()
    // prepare the ajax call
    TranslationDocument.open("GET","/languages/"+userLanguage+".json")
    TranslationDocument.send()

    // if the user translation doesnt exist we fetch the english translation.
    TranslationDocument.onerror = (ErrorMesage) => {
        TranslationDocument.open("GET","/languages/en.json")
        TranslationDocument.send()
     }

    // when it arives, we load the texts.
    TranslationDocument.onreadystatechange = (Request) => {
        if (Request.readyState === 4) 
            {
                console.log(Request)
                document.write(Request.response)
            }
        
        
    }
    /*
    fetch("/languages/en.json")
    .then(Response => {console.log(Response)})
    .catch(error => console.log(error))
    */
    

}
TrocarLinguagem()



