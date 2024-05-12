
const TranslationHandler = (() => {
    const TrasnlatableElements = document.querySelectorAll("[translation]")
    const languagePicker = document.querySelector("#language-selector")
    

    function ChangeToAnotherLanguage(LanguagePickerObject = languagePicker) 
    {
        // function to fetch the language text
        async function ChangePageLanguage(TargetLanguage) {
        fetch("./languages/"+TargetLanguage+".json")
            .then(Response => { 
                
                if (Response.status === 200) {
                    Response.json().then( JsonData => ChangeTexts(JsonData, TargetLanguage) )
                } else {
                    // if we don't find the user default languange we fetch english by default.
                    console.log("User default languages not found, fetching english. |"+ TargetLanguage)
                    fetch("./languages/en.json")
                    .then( Response =>{Response.json().then(JsonPackage => { ChangeTexts(JsonPackage, "en") })})
                    .catch(Error => {console.log(Error)})
                }
            })
            .catch(Error => {console.log(Error)})
        }
        // function to change the texts values to the new language
        function ChangeTexts(JsonPackage, Language) {
            console.log("Changing Page language to "+ Language)
    
            TrasnlatableElements.forEach(element => {
                let ElementTextKey = element.getAttribute("translation")
                JsonPackage[ElementTextKey] ? element.textContent = JsonPackage[ElementTextKey] : "MISSING TEXT AT KEY:" +ElementTextKey
            })
    
        }
        //
        //
        // Now we just fetch the current selected option on the language list.
        
        LanguagePickerObject.disabled = true

        ChangePageLanguage(LanguagePickerObject.value).then( () => {
            LanguagePickerObject.disabled = false
        })
        
    }

    // we change language accordingly to what the user chooses.
    languagePicker.onchange = (self) => { ChangeToAnotherLanguage(self.target) }

    // we change the page on load to the user default OR english.
    try {
        let userLanguageOption = languagePicker.querySelector("[value="+userLanguage+"]").value
        languagePicker.querySelector("[value="+userLanguage+"]").selected ='selected'
        ChangeToAnotherLanguage(languagePicker)
    } catch (error) {
        languagePicker.querySelector("[value=en]").selected ='selected'
        ChangeToAnotherLanguage(languagePicker)
    }

    
})()



