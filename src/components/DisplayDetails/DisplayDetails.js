import React from 'react';
import './DisplayDetails.css';

function DisplayDetails({ data }) {

    return (
        <div className="display__container">
            <p>Выбран пользователь <b>{data.firstName + ' ' + data.lastName}</b></p>
            <p>Описание:</p>
            <textarea className="display__textarea" defaultValue={data.description} />
            <p>Адрес проживания: <b>{data.address.streetAddress}</b></p>
            <p>Город: <b>{data.address.city}</b></p>
            <p>Провинция/штат: <b>{data.address.state}</b></p>
            <p>Индекс: <b>{data.address.zip}</b></p>
        </div>
    )
}

export default DisplayDetails;

