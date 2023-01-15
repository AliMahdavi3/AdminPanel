import * as Yup from "yup";
import {
  addNewGuarantiesService,
  editGuarantiesService,
} from "../../services/guaranties";
import { Alert } from "../../utils/Alert";

export const initialValues = {
  title: "",
  descriptions: "",
  length: "",
  length_unit: "",
};

export const onSubmit = async (values, actions, setData, guaranteeToEdit) => {
  if (guaranteeToEdit) {
    const res = await editGuarantiesService(guaranteeToEdit.id, values);
    if (res.status === 200) {
      Alert("انجام شد !", res.data.message, "success");
      setData((lastData) => {
        let newData = [...lastData];
        let index = newData.findIndex((d) => d.id == guaranteeToEdit.id);
        newData[index] = res.data.data;
        return newData;
      });
    }
  } else {
    const res = await addNewGuarantiesService(values);
    if (res.status === 201) {
      Alert("انجام شد !", res.data.message, "success");
      setData((lastData) => [...lastData, res.data.data]);
    }
  }
};

export const validationSchema = Yup.object({
  title: Yup.string().required("لطفا این قسمت را پر کنید"),
  descriptions: Yup.string(),
  length: Yup.number(),
  length_unit: Yup.string(),
});
