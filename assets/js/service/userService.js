const createMessage = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.status;
    }
  } catch (error) {
    return response.status;
  }
};

const getUserData = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${id}`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    return "ocurrió un error, inténtelo más tarde";
  }
};

const getUsers = async () => {
  try {
    const response = await fetch(`http://localhost:3000/user`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    return "ocurrió un error, inténtelo más tarde";
  }
};
const createUser = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    return "ocurrió un error, inténtelo más tarde";
  }
};
const updateUser = async (data, id) => {
  const response = await fetch(
    `http://localhost:3000/user/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  console.log(response);
};

export const makeRequest = {
  createMessage,
  getUserData,
  getUsers,
  createUser,
  updateUser,
};
