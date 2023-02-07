import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Form, Formik } from 'formik';
import {useLocation} from 'react-router-dom'
import FormikControl from '../../components/form/FormikControl';
import ModalContainer from '../../components/ModalContainer';
import SubmitButton from '../../components/form/SubmitButton';
import { getAllPermissionsServices, getSingleRolesServices } from '../../services/user';
import { initialValues, onSubmit, validationSchema } from './core';

const AddDiscount = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const roleToEdit = location.state?.roleToEdit;
    const editType = location.state?.editType;

    const {setData} = useOutletContext();
    const [permission, setPermission] = useState([]);
    const [roleEdit, setRoleEdit] = useState(null);
    const [reInitValues, setReInitValues] = useState(null)

    const handleGetAllPermission = async () => {
        const res = await getAllPermissionsServices();
        if (res.status === 200) {
            setPermission(res.data.data.map(p=>{return {id: p.id, title: p.description}}));
        };
    };

    const handleGetRoleEditData = async () =>{
        const res = await getSingleRolesServices(roleToEdit);
        if (res === 200){
            const role = res.data.data;
            setRoleEdit(role);
            editType === "role" ? setReInitValues({
                title : role.title,
                description : role.description,
            }) : setReInitValues({
                permissions_id : role.permission.map(p=>""+p.id),
                editpermission: true,
            })
        }
    }

    useEffect(()=>{
        editType !== "role" &&  handleGetAllPermission();
        roleToEdit && handleGetRoleEditData()
    },[]);
  
  
    return (
        <ModalContainer
            className="show d-block"
            id={"add_role_modal"}
            title={editType === "role" ? "ویرایش نقش" :
             editType === "permissions" ? 
             "ویرایش مجوز های دسترسی:" +
             roleToEdit?.title || "" : "افزودن نقش کاربر" }
            fullScreen={editType == "role" ? false : true}
            closeFunction={()=>navigate(-1)}
        >
            <div className="container">
                <div className='row  justify-content-center'>
                    <Formik
                        initialValues={reInitValues || initialValues}
                        onSubmit={(values, actions)=>onSubmit(values, actions, setData, roleToEdit, editType)}
                        validationSchema={validationSchema}
                        enableReinitialize
                     >
                                <Form>

                                {
                                    editType !==  "permissions"  ? (
                                            <>
                                                    <FormikControl
                                                        control="input"
                                                        type="text"
                                                        name="title"
                                                        label="عنوان نقش"
                                                        placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                                                        />
                                                        <FormikControl
                                                        control="textarea"
                                                        type="text"
                                                        name="description"
                                                        label="توضیحات نقش"
                                                        placeholder="فقط از حروف لاتین و اعداد استفاده کنید"
                                                        />
                                            </>
                                    ) : null
                                }
                                    
                                   {editType !== "role" ? (
                                             <FormikControl
                                            control="checkbox"
                                            type="text"
                                            name="permissions_id"
                                            label="دسترسی ها"
                                            options={permission}
                                            />
                                   ) : null}
                                    <div className="btn_box text-center col-12 mt-4">
                                        <SubmitButton />
                                    </div>
                                </Form>
                    </Formik>
                </div>
            </div>

        </ModalContainer>
    );
}

export default AddDiscount;