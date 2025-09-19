document.getElementById("page").addEventListener("click", ()=> {
            document.querySelector(".add-page").classList.toggle('add-page2')
        });
        window.addEventListener("load", ()=> {
            document.querySelector(".add-page").classList.remove('add-page2')
        });
        
      