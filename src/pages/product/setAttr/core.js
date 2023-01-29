import { getCategoryAttrService } from "../../../services/attrService";
import { addProductAttrService } from "../../../services/product";
import { Alert } from "../../../utils/Alert";
import * as Yup from "yup";

export const onSubmit = async (values, actions, productId) => {
  let data = {};
  for (const key in values) {
    if (values[key]) data = { ...data, [key]: { value: values[key] } };
  }

  const res = await addProductAttrService(productId, data);
  if (res.status === 200) {
    Alert("انجام شد", res.data.message, "success");
  }
};

export const initializingData = async (selectedProduct) => {
  let attrVar = [];
  let initials = {};
  let rules = {};
  const promis = Promise.all(
    selectedProduct.categories.map(async (cat) => {
      const res = await getCategoryAttrService(cat.id);
      if (res.status === 200) {
        attrVar = [...attrVar, { groupTitle: cat.title, data: res.data.data }];
        if (res.data.data.length > 0) {
          for (const d of res.data.data) {
            const value =
              selectedProduct.attributes.filter((a) => a.id == d.id)[0]?.pivot
                .value || "";
            initials = { ...initials, [d.id]: value };
            rules = {
              ...rules,
              [d.id]: Yup.string().matches(
                /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
                "فقط از حروف و اعداد استفاده شود"
              ),
            };
          }
        }
      }
    })
  );

  const promisRes = await promis;
  return {
    attrVar,
    initials,
    rules,
  };
};
