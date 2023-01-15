import httpService from "./httpService";

export const getAllGuarantiesService = () => {
  return httpService("/admin/guarantees", "get");
};

export const addNewGuarantiesService = (data) => {
  return httpService("/admin/guarantees", "post", data);
};

export const editGuarantiesService = (guaranteeId, data) => {
  return httpService(`/admin/guarantees/${guaranteeId}`, "put", data);
};

export const deleteGuarantiesService = (guaranteeId) => {
  return httpService(`/admin/guarantees/${guaranteeId}`, "delete");
};
