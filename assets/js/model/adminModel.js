import { makeRequest } from "../service/adminService.js";

const adminData = async () => await makeRequest.getAdminData();
  
export default adminData;