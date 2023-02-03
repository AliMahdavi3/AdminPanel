import httpService from "./httpService";

export const getAllPermissionsServices = () => {
  return httpService("/admin/permissions", "get");
};
