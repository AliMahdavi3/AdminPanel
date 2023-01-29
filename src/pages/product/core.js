import * as Yup from "yup";
import {
  createNewProductService,
  editProductService,
} from "../../services/product";
import { Alert } from "../../utils/Alert";

export const initialValues = {
  category_ids: "",
  title: "",
  price: "",
  weight: null,
  brand_id: null,
  color_ids: "",
  guarantee_ids: "",
  descriptions: "",
  short_descriptions: "",
  cart_descriptions: "",
  image: null,
  alt_image: "",
  keywords: "",
  stock: null,
  discount: null,
};

export const onSubmit = async (values, actions, productToEdit) => {
  if (productToEdit) {
    const res = await editProductService(productToEdit.id, values);
    if (res.status === 200) {
      Alert("انجام شد", res.data.message, "success");
    }
  } else {
    const res = await createNewProductService(values);
    if (res.status === 201) {
      Alert("انجام شد", res.data.message, "success");
    }
  }
};

export const validationSchema = Yup.object({
  category_ids: Yup.string().required("لطفا این قسمت را کامل کنید"),
  title: Yup.string().required("لطفا این قسمت را کامل کنید"),
  price: Yup.number().required("لطفا این قسمت را کامل کنید"),
  weight: Yup.number(),
  brand_id: Yup.number(),
  color_ids: Yup.string(),
  guarantee_ids: Yup.string(),
  descriptions: Yup.string(),
  short_descriptions: Yup.string(),
  cart_descriptions: Yup.string(),
  image: Yup.mixed()
    .test("filesize", "حجم فایل نمیتواند بیشتر از 500 کیلوبایت باشد", (value) =>
      !value ? true : value.size <= 500 * 1024
    )
    .test("format", "فرمت فایل باید jpg باشد", (value) =>
      !value ? true : value.type === "image/jpeg"
    ),
  alt_image: Yup.string(),
  keywords: Yup.string(),
  stock: Yup.number(),
  discount: Yup.number(),
});
