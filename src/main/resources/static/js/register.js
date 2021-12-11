

$("#registrarse").click((e)=>{
    e.preventDefault()

    if($("#values-name").val() === "" || $("#values-email").val() === "" || $("#values-password").val() === "" || $("#values-ConPassword").val() === ""){
        alert("debes completar todos los campos del registro")
    }

    else if($("#values-password").val() === $("#values-ConPassword").val() ){
        $(".p__alert-wrong").remove()
        IniciarSesion()
        cleanFields()

    }


    else{
        if($(".box-to-alert > p").length > 0){
            
        }
        else{
        $(".box-to-alert").append("<p class='p__alert-wrong'>La contraseña no coincide asegurate de escribirla bien &#9888;</p>")
        }
    }
})


    function cleanFields(){
        $("#values-name").val("")
        $("#values-email").val("")
        $("#values-password").val("")
        $("#values-ConPassword").val("")
    }

    async function IniciarSesion(){

        DatosUsuario={
            email:$("#values-email").val(),
            password:$("#values-password").val(),
            name:$("#values-name").val(),
        }

        console.log(DatosUsuario)

        const respuesta = await fetch("http://168.138.133.236:8080/api/user/new" , {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(DatosUsuario)

        })

        const respuestaJson = await respuesta.json()
        alert("Su cuenta ha sido creada!!!")


    }