import React from 'react';
import { useHistory } from "react-router-dom";
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import FormField from "../common/form/FormField";
import {userState} from "../store"
import {useSetRecoilState} from "recoil";
import {STORIES} from "../route.constants"
import FormHeader from "../common/form/FormHeader";
import FormSubmit from "../common/form/FormSubmit";

export default function Signup() {

    const setUser = useSetRecoilState(userState);
    const history = useHistory();

    const routeChange = () => {
        history.push(STORIES);
    }

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
                    setUser(values);
                    setSubmitting(false);
                    clearTimeout(timeOut);
                    routeChange();
                }, 100);
            }}
        >
            <Form className="col-6">
                <FormHeader value="Let's get your info..."/>
                <FormField fieldName="firstName" name="First Name" type="text" placeholder="Brendan"/>
                <FormField fieldName="lastName" name="Last Name" type="text" placeholder="Smith"/>
                <FormField fieldName="email" name="Email" type="email" placeholder="smithb@gmail.com"/>
                <FormField fieldName="password" name="Password" type="text" placeholder="password123"/>
                <FormField fieldName="age" name="Age" type="text" placeholder="34"/>
                <FormSubmit/>
            </Form>
        </Formik>
    );
}