import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

export default function Signup() {
    return (
        <>
            <Formik
                initialValues={{firstName: '', lastName: '', email: '', password: '', age: null}}
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
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);

                        clearTimeout(timeOut)
                    }, 100);
                }}
            >
                <Form className="col-6">
                    <h4 class="form-group text-center">Let's get you info...</h4>
                    <div class="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <Field class="form-control" name="firstName" type="text" placeholder="Brendan"/>
                        <ErrorMessage name="firstName"/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <Field class="form-control" name="lastName" type="text" placeholder="Smith"/>
                        <ErrorMessage name="lastName"/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Email Address</label>
                        <Field class="form-control" name="email" type="email" placeholder="smithb@gmail.com"/>
                        <ErrorMessage name="email"/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="password">Password</label>
                        <Field class="form-control" name="password" type="text" placeholder="password123"/>
                        <ErrorMessage name="password"/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="age">Age</label>
                        <Field class="form-control" name="age" type="text" placeholder="34"/>
                        <ErrorMessage name="age"/>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}