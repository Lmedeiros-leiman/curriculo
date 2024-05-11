
const TranslationHandler = (() => {
    const TrasnlatableElements = document.querySelectorAll("[translation]")
    const languagePicker = document.querySelector("#language-selector")
    // we change language accordingly to what the user chooses.
    languagePicker.onchange = (self) => {
        self.target.disabled = true
        ChangePageLanguage(self.target.value).then( () => {
            self.target.disabled = false
        })
    }

    // we fetch the translation documents from the repository
    async function ChangePageLanguage(TargetLanguage = userLanguage) {
    fetch("/languages/"+TargetLanguage+".json")
        .then(Response => { 
            
            if (Response.status === 200) {
                Response.json().then( JsonData => ChangeTexts(JsonData, TargetLanguage) )
            } else {
                // if we don't find the user default languange we fetch english by default.
                console.log("User default languages not found, fetching english. |"+ userLanguage)
                fetch("/languages/en.json")
                .then( Response =>{Response.json().then(JsonPackage => { ChangeTexts(JsonPackage, "en") })})
                .catch(Error => {console.log(Error)})
            }
        })
        .catch(Error => {console.log(Error)})
    }
    // we fetch all the trasnlatable elements and change their text contents.
    function ChangeTexts(JsonPackage, Language = userLanguage) {
        console.log("Changing Page language to "+ Language)

        TrasnlatableElements.forEach(element => {
            let ElementTextKey = element.getAttribute("translation")
            JsonPackage[ElementTextKey] ? element.textContent = JsonPackage[ElementTextKey] : "MISSING TEXT AT KEY:" +ElementTextKey
        })

    }

    // and we execute it once the script is loaded (we assume the page is already fully loaded.)
    ChangePageLanguage()
})()



