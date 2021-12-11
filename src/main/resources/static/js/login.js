

$("#IniciarSesion").click((e)=>{
    
    e.preventDefault()

        IniciarSesion()
        cleanFields()
    
})


    function cleanFields(){

        $("#values-email").val("")
        $("#values-password").val("")
        
    }

    async function IniciarSesion(){



        const respuesta = await fetch("http://168.138.133.236:8080/api/user/"+ $("#values-email").val()+"/"+$("#values-password").val() , {
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })

        const respuestaJson = await respuesta.json()
        if(respuestaJson.id != null){
            alert("Bienvenido "+respuestaJson.name)
        }else {
            alert("Usuario o contraseña incorrectos o no existe")
        }

    }
    