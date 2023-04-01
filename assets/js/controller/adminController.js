const setAdminState = (value) =>
  localStorage.setItem("adminLogin", value || JSON.stringify(false));

const getAdminState = () => JSON.parse(localStorage.getItem("adminLogin"));

export const adminController = {
  setAdminState,
  getAdminState,
};
