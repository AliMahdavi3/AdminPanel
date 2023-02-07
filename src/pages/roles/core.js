import * as Yup from "yup";
import { addNewRolesServices, editRolePermissionsServices, editRolesServices } from "../../services/user";
import { Alert } from "../../utils/Alert";

export const initialValues = {
    title: "",
    description: "",
    permissions_id: [],
};

export const onSubmit = async (values, actions, setData, roleToEdit, editType) => {
        if (editType == "role") {
        const res = await editRolesServices(roleToEdit, values)
        if (res.status === 200) {
            Alert('انجام شد', res.data.message, 'success')
            setData(lastData=>{
                let newData = [...lastData];
                let index = newData.findIndex((d) => d.id == roleToEdit);
                newData[index] = res.data.data;
                return newData;
            })
        }
    }else if (editType == "permissions") {
        const res = await editRolePermissionsServices(roleToEdit, values)
        if (res.status === 200)  Alert('انجام شد', res.data.message, 'success')
    }else{
        const res = await addNewRolesServices(values);
        if (res.status === 201) {
            Alert('انجام شد', res.data.message, 'success')
            setData(old=>[...old, res.data.data])
        }
    }
};

export const validationSchema = Yup.object().shape({
    title: Yup.string().when('editPermissions', {
        is: true,
        then: null,
        otherwise: Yup.string().required("لطفا این قسمت را پر کنید")
        .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-_.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
    }),        
    description: Yup.string().when('editPermissions', {
        is: true,
        then: null,
        otherwise: Yup.string().required("لطفا این قسمت را پر کنید")
        .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-_.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
    }),
    permissions_id: Yup.array().min(1, "حد اقل یک مورد انتخاب کنید")
}) 