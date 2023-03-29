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
            return response.status;
        }
    } catch (error) {
        return response.status;
    }
}

export const makeRequest = {
    createMessage
}