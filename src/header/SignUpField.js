import React from 'react';
import {ErrorMessage, Field} from "formik";

function SignUpField(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.fieldName}>{props.name}</label>
            <Field className="form-control" name={props.fieldName} type={props.type} placeholder={props.placeholder}/>
            <div style={{color: 'red'}}>
                <ErrorMessage name={props.fieldName} className="text-danger"/>
            </div>
        </div>
    );
}

export default SignUpField;