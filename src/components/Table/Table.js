import React from 'react';
import './Table.css';


function Table(props) {
 
    return (
        //отрисовка таблицы, дизайн таблицы - Bootstrap
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" onClick={props.onSort.bind(null, 'id', 'arrow1')}>ID {props.arrows.arrow1}</th>
                    <th scope="col" onClick={props.onSort.bind(null, 'firstName', 'arrow2')}>First Name {props.arrows.arrow2}</th>
                    <th scope="col" onClick={props.onSort.bind(null, 'lastName', 'arrow3')}>Last Name {props.arrows.arrow3}</th>
                    <th scope="col" onClick={props.onSort.bind(null, 'email', 'arrow4')}>Email {props.arrows.arrow4}</th>
                    <th scope="col" onClick={props.onSort.bind(null, 'phone', 'arrow5')}>Phone {props.arrows.arrow5}</th>
                </tr>
            </thead>
            <tbody>
                {props.data.length > 0 && props.data.map((item, index) =>
                    (<tr onClick={props.onRowSelect.bind(null, item)} className="table__row" key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    );
}

export default Table;