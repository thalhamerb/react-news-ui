import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

function Signup() {
    return (
        <>
            <h3>
                Let's get you info...
            </h3>
            <Formik
                initialValues={{firstName: '', lastName: '', email: ''}}
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
                        .required('Required'),
                    age: Yup.number()
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
                <Form>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text"/>
                        <ErrorMessage name="firstName"/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text"/>
                        <ErrorMessage name="lastName"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email"/>
                        <ErrorMessage name="email"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="text" placeholder="Password"/>
                        <ErrorMessage name="password"/>
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <Field name="age" type="text"/>
                        <ErrorMessage name="age"/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
};


export default Signup;