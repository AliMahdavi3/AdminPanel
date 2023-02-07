import httpService from "./httpService";

export const getAllPermissionsServices = () => {
  return httpService("/admin/permissions", "get");
};

export const getAllRolesServices = () => {
  return httpService("/admin/roles", "get");
};

export const addNewRolesServices = (data) => {
  return httpService("/admin/roles", "post", data);
};

export const getSingleRolesServices = (roleId) => {
  return httpService(`/admin/roles/${roleId}`, "get");
};

export const editRolesServices = (roleId, data) => {
  return httpService(`/admin/roles/${roleId}`, "put", data);
};

export const deleteRolesServices = (roleId) => {
  return httpService(`/admin/roles/${roleId}`, "delete");
};

export const editRolePermissionsServices = (roleId, data) => {
  return httpService(`/admin/roles/${roleId}/permissions`, "put", data);
};
