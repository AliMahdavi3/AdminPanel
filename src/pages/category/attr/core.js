import { addCategoryAttrService, editCategoryAttrService } from "../../../services/attrService";
import { Alert } from "../../../utils/Alert";
import * as Yup from "yup";

export const initialValues = {
  title: "",
  unit: "",
  in_filter: true,
};

export const onSubmit = async (
  values,
  actions,
  catId,
  setData,
  attrToEdit,
  setAttrToEdit
) => {
  try {
    values = {
      ...values,
      in_filter: values.in_filter ? 1 : 0,
    };
    if (attrToEdit) {
      const res = await editCategoryAttrService(attrToEdit.id, values);
      if (res.status === 200) {
        setData((oldData) => {
          const newData = [...oldData];
          const index = newData.findIndex((d) => d.id === attrToEdit.id);
          newData[index] = res.data.data;
          return newData;
        });

        Alert("انجام شد!", res.data.message, "success");
        setAttrToEdit(null);
      }
    } else {
      const res = await addCategoryAttrService(catId, values);
      if (res.status === 201) {
        Alert("انجام شد!", res.data.message, "success");
        setData((oldData) => [...oldData, res.data.data]);
        actions.resetForm()
      }
    }
  } catch (error) {}
};

export const validationSchema = Yup.object({
  title: Yup.string().required("لطفا این قسمت را پر کنید"),

  unit: Yup.string().required("لطفا این قسمت را پر کنید"),

  in_filter: Yup.boolean(),
});
