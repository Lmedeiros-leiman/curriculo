
function TrocarLinguagem() {
    const TrasnlatableElements = document.querySelectorAll("[translation]")


    // we fetch the translation documents from the repository
    fetch("/languages/"+userLanguage+".json")
        .then(Response => { 
            
            if (Response.status === 200) {
                Response.json().then( JsonData => ChangeTexts(JsonData) )
            } else {
                // if we don't find the user default languange we fetch english by default.
                console.log("User default languages not found, fetching english. |"+ userLanguage)
                fetch("/languages/en.json")
                .then( Response =>{Response.json().then(JsonPackage => { ChangeTexts(JsonPackage, "en") })})
                .catch(Error => {console.log(Error)})
            }
        })
        .catch(Error => {console.log(Error)})
    
    function ChangeTexts(JsonPackage, Language = userLanguage) {
        console.log("Changing Page language to "+ Language)
        
        console.log(JsonPackage)
        TrasnlatableElements.forEach(element => {
            let ElementTextKey = element.getAttribute("translation")
            JsonPackage[ElementTextKey] ? element.textContent = JsonPackage[ElementTextKey] : "MISSING TEXT AT KEY:" +ElementTextKey
        })

    }


}
TrocarLinguagem()



