import React from 'react';
import './AddNewUser.css';

function AddNewUser({handleUserClick, text}) {
  return (
    <div className="user__container">
        <p className="user__text">Добавить пользователя</p>
        <button onClick={handleUserClick} className="user__button">{text}</button>
    </div>
  );
}

export default AddNewUser;