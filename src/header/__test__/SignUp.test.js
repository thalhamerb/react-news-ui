import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SignUp from "../SignUp";

test('successful submit', async () => {
    const {getByLabelText, findByText, getByText} = render(<SignUp/>);

    await applyValues("BRIAN", "THALHAMER", "thalhamerb@gmail.com", "Password123", "34", getByLabelText);
    await clickSubmit(getByText);

    expect(await findByText('{"firstName":"BRIAN","lastName":"THALHAMER","email":"thalhamerb@gmail.com","password":"Password123","age":"34"}')).toBeInTheDocument();
})

test('password is invalid - first condition', async () => {
    const {getByLabelText, findByText, getByText} = render(<SignUp/>);

    await applyValues("BRIAN", "THALHAMER", "thalhamerb@gmail.com", "sssssssss", "34", getByLabelText);
    await clickSubmit(getByText);

    expect(await findByText('Must contain at least one upper case letter')).toBeInTheDocument();
})

test('password is invalid - second condition', async () => {
    const {getByLabelText, findByText, getByText} = render(<SignUp/>);
    await applyValues("BRIAN", "THALHAMER", "thalhamerb@gmail.com", "Password", "34", getByLabelText);

    await clickSubmit(getByText);
    expect(await findByText('Must contain at least one number')).toBeInTheDocument();
})

async function applyValues(firstName, lastName, email, password, age, getByLabelText) {
    await applyValueToField(getByLabelText("First Name"), firstName);
    await applyValueToField(getByLabelText("Last Name"), lastName);
    await applyValueToField(getByLabelText("Email"), email);
    await applyValueToField(getByLabelText("Password"), password);
    await applyValueToField(getByLabelText("Age"), age);
}

async function applyValueToField(ele, value) {
    if (value != null) {
        await wait(() => {
            fireEvent.change(ele, { target: { value: value } });
        });
    }
}

async function clickSubmit(getByText) {
    const submitButton = getByText('Submit');
    await wait(() => {
        fireEvent.click(submitButton);
    });
}