function correr(){
    let inputEdad1 = document.getElementById("tiempo1").value
    let inputEdad2 = document.getElementById("tiempo2").value
       let nombre = document.getElementById("name1").value
    let nombre2 = document.getElementById("name2").value
    let age = document.getElementById("edad1").value
    let age2 = document.getElementById("edad2").value

if (parseInt(inputEdad2)>parseInt(inputEdad1)){
        swal ({
        title: "felicitaciones al corredor 1",
        text: `Nombre: ${nombre} \nEdad: ${age} Años \nTiempo: ${inputEdad1} Segundos`,
        icon: "success", 
    });
 } else if (parseInt(inputEdad2)===parseInt(inputEdad1)){
  swal("Hay empate", "Los dos partricipantes tienen el mismo tiempo", "success");

 
 }
   
 else{
    swal ({
        title: "felicitaciones al corredor 2",
        text: `Nombre: ${nombre2} \nEdad: ${age2} Años \nTiempo: ${inputEdad2} Segundos`,
        icon: "success", 
    });
 }

 if (!nombre || nombre === "" ){
    swal({
        title: "¡ERROR!",
        text: "Hay alguna casilla vacia",
        icon: "error",
      });
    } else if(!nombre2 || nombre2 === ""){
        swal({
            title: "¡ERROR!",
            text: "Hay alguna casilla vacia",
            icon: "error",
          });

    } else if(!inputEdad1 || inputEdad1 === ""){
        swal({
            title: "¡ERROR!",
            text: "Hay alguna casilla vacia",
            icon: "error",
          });
        }
        else if(!inputEdad2 || inputEdad2 === ""){
            swal({
                title: "¡ERROR!",
                text: "Hay alguna casilla vacia",
                icon: "error",
              });
            }
            else if(!age || age === ""){
                swal({
                    title: "¡ERROR!",
                    text: "Hay alguna casilla vacia",
                    icon: "error",
                  });
                }
                else if(!age2 || age2 === ""){
                    swal({
                        title: "¡ERROR!",
                        text: "Hay alguna casilla vacia",
                        icon: "error",
                      });
                    }
    

}