import React, {useState} from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import SignUpField from "./SignUpField";

export default function Signup() {

    const [values, setValues] = useState({})

    return (
        <Formik
            initialValues={{firstName: '', lastName: '', email: '', password: '', age: ''}}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .trim()
                    .matches(/^[A-Z,a-z]+$/, "Only letters allowed")
                    .required('Required'),
                lastName: Yup.string()
                    .trim()
                    .matches(/^[A-Z,a-z]+$/, "Only letters allowed")
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .min(8, 'Must be 8 characters long')
                    .matches('(?=.*[A-Z])', 'Must contain at least one upper case letter')
                    .matches('.*[0-9].*', 'Must contain at least one number')
                    .required('Required'),
                age: Yup.number().nullable(true)
                    .min(10, 'Must be at least 10 years old to join')
                    .max(150, 'You cannot be immortal')
                    .integer('No partial ages')
            })}
            onSubmit={(values, {setSubmitting}) => {
                const timeOut = setTimeout(() => {
                    setValues(values)
                    setSubmitting(false);

                    clearTimeout(timeOut)
                }, 100);
            }}
        >
            <Form className="col-6">
                <h4 className="form-group text-center">Let's get you info...</h4>
                <SignUpField fieldName="firstName" name="First Name" type="text" placeholder="Brendan"/>
                <SignUpField fieldName="lastName" name="Last Name" type="text" placeholder="Smith"/>
                <SignUpField fieldName="email" name="Email" type="email" placeholder="smithb@gmail.com"/>
                <SignUpField fieldName="password" name="Password" type="text" placeholder="password123"/>
                <SignUpField fieldName="age" name="Age" type="text" placeholder="34"/>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div>{JSON.stringify(values)}</div>
            </Form>
        </Formik>
    );
}