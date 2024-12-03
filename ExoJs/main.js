const listInput = document.getElementById("listeInput")
const ajouter = document.getElementById("ajouter")
const liste = document.getElementById("liste")

ajouter.addEventListener("click", function(){

            let val = listInput.value
            console.log(val)
            liste.innerHTML += `<li class="listeItem">${val}</li>`;

            document.querySelectorAll(".listeItem").forEach(item => { 
            item.addEventListener("click", function() { 
                if( 
                    item.style.textDecoration === "line-through 5px wavy") { 
                        item.style.textDecoration = "none";
                    }else{
                        item.style.textDecoration = "line-through 5px wavy";
                    }
                
            
        }); 
    });
     listInput.value = "";
})
   













