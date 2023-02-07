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

// ----------------------------------------------------users--------------------------------------//

export const getAllUsersServices = () => {
  return httpService("/admin/users", "get")
}

export const getAllPaginatedUsersService = (page, countOnPage, searchChar) => {
  return httpService(`/admin/users?page=${page}&count=${countOnPage}&searchChar=${searchChar}`, "get");
};

export const addNewUserService = (data) => {
  return httpService("/admin/users", "post", data);
};

export const getSinglrUserService = (userId)=>{
  return httpService(`/admin/users/${userId}`, "get")
}

export const editUserService = (userId, data) => {
  return httpService(`/admin/users/${userId}`, "put", data);
};

export const deleteUserService = (userId) => {
  return httpService(`/admin/users/${userId}`, "delete");
}