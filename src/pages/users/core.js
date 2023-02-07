import * as Yup from "yup";
import { addNewUserService, editUserService } from "../../services/user";
import { Alert } from "../../utils/Alert";
import { convertDateToMiladi } from "../../utils/convertDate";

export const initialValues = {
    user_name: "",
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    birth_date: "",
    gender: 1,
    roles_id: [],
};

export const onSubmit = async (values, actions, setData, userId) => {
    values = {
        ...values,
        birth_date : values.birth_date ? convertDateToMiladi(values.birth_date) : null,
    }
    if (userId) {

        const res = await editUserService(userId, values)
        if (res.status == 200) {
            Alert('انجام شد', res.data.message, 'success')
            setData(lastData=>{
                let newData = [...lastData];
                let index = newData.findIndex((d) => d.id == userId);
                newData[index] = res.data.data;
                return newData;
            })
        }

    }else{
        const res = addNewUserService(values);
        if (res.status === 201) {
            Alert("انجام شد", res.data.message, "success");
            actions.resetForm();
            setData(old=>[...old, res.data.data])
        };
    };
};

export const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("لطفا این قسمت را پر کنید")
        .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-_.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
    first_name: Yup.string().required("لطفا این قسمت را پر کنید")
        .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-_.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
    last_name: Yup.string().required("لطفا این قسمت را پر کنید")
        .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-_.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),


    phone : Yup.number().typeError("لطفا از عدد استفاده کنید").required("لطفا این قسمت را پر کنید"),
    email : Yup.string().email("لطفا از فرمت ایمیل استفاده کنید"),

    password: Yup.string().required("لطفا این قسمت را پر کنید")
        .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-_.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),

    birth_date : Yup.string()
        .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-_.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
    gender : Yup.number(),
    roles_id : Yup.array().min(1, "حداقل یک مورد را انتخاب کنید"),
});