import { convertDataToFormData } from "../utils/convertData";
import httpService from "./httpService";

export const getAllProductsService = (page, countOnPage, searchChar) => {
  return httpService(
    `/admin/products?page=${page}&count=${countOnPage}&searchChar=${searchChar}`,
    "get"
  );
};

export const deleteProductsService = (productId) => {
  return httpService(`/admin/products/${productId}`, "delete");
};

export const createNewProductService = (data) => {
  return httpService(
    "/admin/products",
    "post",
    data.image ? convertDataToFormData(data) : data
  );
};

export const editProductService = (productId, data) => {
  return httpService(`/admin/products/${productId}`, "put", data);
};

export const addProductAttrService = (productId, data) => {
  return httpService(`/admin/products/${productId}/add_attr`, "post", data);
};

export const addProductImgService = (productId, data) => {
  return httpService(`/admin/products/${productId}/add_image`, "post", data);
};

export const deleteProductImgService = (imageId) => {
  return httpService(`/admin/products/gallery/${imageId}`, "delete");
};

export const setMainProductImgService = (imageId) => {
  return httpService(`/admin/products/gallery/set_main/${imageId}`, "get");
};


export const getOneProductService = (productId) => {
  return httpService(`/admin/products/${productId}`, "get");
};


// in addDiscounts
export const getAllProductTitlesService = () => {
  return httpService(`/admin/products/all_titles`, "get");
};
// 