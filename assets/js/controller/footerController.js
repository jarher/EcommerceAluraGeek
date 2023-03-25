import sendMessage from "../model/userModel.js";

const footerSubmit = async () => {
    try {
       const userName = document.querySelector("[data-username]");
       const userMessage = document.querySelector("[data-usermessage]");

       if (userName && userMessage) {
         const data = {
           id: uuid.v4(),
           userName,
           userMessage,
         };
         const response = await sendMessage(data);
         if(response){
          console.log(response)
         }
       } 
    } catch (error) {
        console.log(error);
    }
  
};

export default footerSubmit;