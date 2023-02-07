import { ErrorMessage, FastField } from 'formik';
import React, { Fragment } from 'react';
import FormikError from './FormikError';

const Checkbox = (props) => {
    const {name,label,options, className} = props;
    return (
        <div className={`mb-2 ${className} row`}>
            <label htmlFor={name} className="form-label">{label}</label>
            <ErrorMessage name={name} component={FormikError}/>
            <FastField className="form-control" id={name} name={name}>
                {({field})=>{
                    return options.map(o=>(
                        <Fragment key={o.id}>
                            <div className='d-inline-block col-md-6 col-xl-4 pb-1' key={o.id}>
                            <input 
                            className='form-check-input me-4'
                            type="checkbox" 
                            id={`${name}_${o.id}`}
                            {...field}
                            value={o.id}
                            checked={field.value.includes(""+o.id)}
                            />
                            <label htmlFor={`${name}_${o.id}`} className="mx-1 ms-4">{o.title}</label>
                            </div>
                        </Fragment>
                    ))
                }}
            </FastField>
        </div>
    );
}

export default Checkbox;