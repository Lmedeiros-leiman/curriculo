const NavBarBurguer = ( () => {
    
    const SideBar = document.querySelector("#sidebar")
    const BurguerButton = document.querySelector("#burguer")

    BurguerButton.onclick = () => {
        
        const firstBar = BurguerButton.children[0]
        const secondBar = BurguerButton.children[1]
        const thirdBar = BurguerButton.children[2]
        

        if (BurguerButton.getAttribute("state") === "open") 
            {
                BurguerButton.setAttribute("state","closed")
                // empilha
                firstBar.style.transform = "translateY(-50%)"
                firstBar.style.top = "0%"
                secondBar.style.top = "50%"
                secondBar.style.transform = "translateY(-50%)"
            } 
        else {
                BurguerButton.setAttribute("state","open")
                // transformar em um X

                firstBar.style.transform = "translateY(-50%) rotate(-45deg)"
                firstBar.style.top = "25%"
                secondBar.style.top = "25%"
                secondBar.style.transform = "translateY(-50%) rotate(45deg)"


        } 

        
    }
    


})()