const createMessage = async (data) => {
    try {
        const response = await fetch("http://localhost:3000/messages",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        if(response.ok){
            return "¡Mensaje enviado con éxito!";
        }
    } catch (error) {
        return "Hubo un error al enviar el mensaje, inténtelo de nuevo";
    }
}

export const makeRequest = {
    createMessage
}