import React from 'react';
import {ErrorMessage, Field} from "formik";

export default function FormField(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.fieldName}>{props.name}</label>
            <Field className="form-control" id={props.fieldName} name={props.fieldName} type={props.type} placeholder={props.placeholder}/>
            <div style={{color: 'red'}}>
                <ErrorMessage name={props.fieldName} className="text-danger"/>
            </div>
        </div>
    );
}
