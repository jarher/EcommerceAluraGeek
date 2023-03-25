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
            return response.json();
        }
    } catch (error) {
        console.log(error);
    }
}

export const makeRequest = {
    createMessage
}