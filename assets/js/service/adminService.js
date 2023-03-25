const getAdminData = async () => {
  try {
    const response = await fetch("http://localhost:3000/admin");
    if(response.ok){
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export const makeRequest = {
  getAdminData,
};
