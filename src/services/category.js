import httpService from "./httpService";

export const getCategoryService = (id = null) => {
  return httpService(`/admin/categories${id ? `?parent=${id}` : ""}`, "get");
};

export const createNewCategoryService = (data) => {

  if (data.image) {

    let formData = new FormData();

    formData.append("title", data.title);

    formData.append("descriptions", data.descriptions);

    formData.append("parent_id", data.parent_id);

    formData.append("is_active", data.is_active);

    formData.append("show_in_menu", data.show_in_menu);

    formData.append("image", data.image);

    data = formData;

  }

  return httpService("/admin/categories", "post", data);
};
