import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ErrorMessage, Field } from "formik";
import FormikError from "./FormikError";

const Ckeditor = ({ label, name, placeholder, className }) => {
  return (
    <Field>
      {({ form }) => {
        return (
          <div className={`col-12 ${className} mb-4`}>
            <CKEditor
              editor={ ClassicEditor }
              data={form.values[name] || `<p>${label} : ${placeholder}</p>`}
              onReady={(editor) => {
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                form.setFieldValue(name, data)
              }}
              onBlur={(event, editor) => {
                form.setFieldTouched(name)
              }}
              onFocus={(event, editor) => editor.getData() == `<p>${label} : ${placeholder}</p>` ? editor.setData('') : null}
            />
            <ErrorMessage name={name} component={FormikError} />
          </div>
        );
      }}
    </Field>
  );
};

export default Ckeditor;
