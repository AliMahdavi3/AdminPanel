import * as Yup from "yup";
import { addNewBrandService, editBrandService } from "../../services/brand";
import { Alert } from "../../utils/Alert";

export const initialValues = {
  original_name: "",
  persian_name: "",
  descriptions: "",
  logo: null,
};

export const onSubmit = async (values, actions, setData, brandToEdit) => {
  if (brandToEdit) {
    const res = await editBrandService(brandToEdit.id, values);
    if (res.status === 200) {
      Alert("انجام شد!", res.data.message, "success");
      setData((lastData) => {
        let newData = [...lastData];
        let index = newData.findIndex((d) => d.id == brandToEdit.id);
        newData[index] = res.data.data;
        return newData;
      });
    }
  } else {
    const res = await addNewBrandService(values);
    if (res.status === 201) {
      Alert("انجام شد!", res.data.message, "success");
      setData((lastData) => [...lastData, res.data.data]);
    }
  }
};

export const validationSchema = Yup.object({
  original_name: Yup.string().required("لطفا این قسمت را پر کنید"),
  persian_name: Yup.string().required("لطفا این قسمت را پر کنید"),

  descriptions: Yup.string(),

  logo: Yup.mixed()

    .test("filesize", "حجم فایل نمیتواند بیشتر از 500 کیلوبایت باشد", (value) =>
      !value ? true : value.size <= 500 * 1024
    )
    .test("format", "فرمت فایل باید jpg باشد", (value) =>
      !value ? true : value.type === "image/jpeg" || value.type === "image/png"
    ),
});
