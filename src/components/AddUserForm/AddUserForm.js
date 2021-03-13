import React, { useState } from 'react';
import './AddUserForm.css';

function AddUserForm(props) {
    const [values, setValues] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    function formSubmit(evt) {
        evt.preventDefault();

    }

    function handleInputChange(evt) {
        const { name, value } = evt.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    return (
        <form className="form">
            <input name='id' placeholder='id' onChange={(evt) => handleInputChange(evt)}  required />
            <input name='firstName' placeholder='First Name' onChange={(evt) => handleInputChange(evt)}  required />
            <input name='lastName' placeholder='Last Name' onChange={(evt) => handleInputChange(evt)}  required />
            <input name='email' placeholder='Email' type="email" onChange={(evt) => handleInputChange(evt)}  required />
            <input name='phone' placeholder='Phone' onChange={(evt) => handleInputChange(evt)}  required />
            <button onSubmit={(evt) => formSubmit(evt)} onClick={props.onSubmit.bind(null, values)} type='submit' >Добавить</button>
        </form>
    );
}

export default AddUserForm;