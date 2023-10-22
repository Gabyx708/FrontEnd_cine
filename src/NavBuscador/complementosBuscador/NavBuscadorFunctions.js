// document.addEventListener("DOMContentLoaded", function () {
//     const checklist = document.getElementById("checklist");
//     const clearButton = document.getElementById("clearButton");

//     // Agrega un evento de escucha para marcar o desmarcar elementos de la lista
//     checklist.addEventListener("click", function (event) {
//         if (event.target.type === "checkbox") {
//             const listItem = event.target.parentElement;
//             listItem.classList.toggle("completed");
//         }
//     });

//     // Agrega un evento de escucha para borrar tareas completadas
//     clearButton.addEventListener("click", function () {
//         const completedItems = checklist.querySelectorAll(".completed");
//         completedItems.forEach(function (item) {
//             item.remove();
//         });
//     });
// });



// function uncheck(){
//     var checkbox1 = document.getElementById("genAc");
//     var checkbox2 = document.getElementById("genFa");
//     var checkbox3 = document.getElementById("genCo") 
//     checkbox1.onclick = function()
//     { 
//     if(checkbox1.checked != false){ 
//     checkbox2.checked =null;
//     checkbox3.checked=null;}
//     } 
//     checkbox2.onclick = function(){ 
//     if(checkbox2.checked != false){ 
//     checkbox1.checked=null;
//     checkbox3.checked=null;}
//     } 
//     checkbox3.onclick = function(){ 
//     if(checkbox3.checked != false){ 
//     checkbox1.checked=null;
//     checkbox2.checked=null;}
//     } 
// }

function uncheck(checkbox) {
    function uncheck(checkbox) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        
        checkboxes.forEach(function (cb) {
            if (cb !== checkbox) {
                cb.checked = false;
            }
        });
    }
    
}

