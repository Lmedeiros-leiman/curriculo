const NavBarBurguer = ( () => {
    
    const SideBar = document.querySelector("#sidebar")
    const BurguerButton = document.querySelector("#burguer")

    BurguerButton.onclick = () => {
        
        const firstBar = BurguerButton.children[0]
        const secondBar = BurguerButton.children[1]
        
        if (BurguerButton.getAttribute("state") === "open") 
            {
                BurguerButton.setAttribute("state","closed")
                // empilha
                firstBar.style.transform = "translateY(0)"
                firstBar.style.top = "0%"
                secondBar.style.top = "50%"
                secondBar.style.transform = "translateY(-50%)"

                SideBar.setAttribute("status","hidden")
                SideBar.style.left = "-110%"
                
            } 
        else {
                BurguerButton.setAttribute("state","open")
                // transformar em um X

                firstBar.style.transform = "translateY(100%) rotate(-45deg)"
                firstBar.style.top = "25%"
                secondBar.style.top = "25%"
                secondBar.style.transform = "translateY(100%) rotate(45deg)"
                
                SideBar.setAttribute("status","visible")
                SideBar.style.left = "0"

        } 
    }
})()