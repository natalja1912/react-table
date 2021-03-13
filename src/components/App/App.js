import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import Table from '../Table/Table';
import Search from '../Search/Search';
import AddNewUser from '../AddNewUser/AddNewUser';
import DisplayDetails from '../DisplayDetails/DisplayDetails';
import AddUserForm from '../AddUserForm/AddUserForm';
import sortItems from '../sortItems';
import smallData from '../../data/small_data';
import bigData from '../../data/big_data';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const usersPerPage = 50;
  const [indexes, setIndexes] = useState({ index1: 0, index2: 50 });
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});
  const [displayRow, setDisplayRow] = useState(false);
  const [userForm, setUserForm] = useState(false);
  const [buttonText, setButtonText] = useState('+');
  const [arrows, setArrows] = useState({
    arrow1: '⇑',
    arrow2: '⇑',
    arrow3: '⇑',
    arrow4: '⇑',
    arrow5: '⇑',
  });

  //загрузка данных о пользователях при загрузке страницы
  useEffect(() => {
    setData(smallData);
  }, [])


  //изменение индексов отображаемых элементов при изменении номера страницы
  function paginate(pageNumber) {
    let indexOfLastItem = pageNumber * usersPerPage;
    let indexOfFirstItem = indexOfLastItem - usersPerPage;
    setIndexes({
      index1: indexOfFirstItem,
      index2: indexOfLastItem,
    })
    setShownData(filteredData.slice(indexOfFirstItem, indexOfLastItem));
  }

  //перезапись массива отображаемых элементов при изменении индексов или отфильтрованных данных
  useEffect(() => {
    setShownData(filteredData.slice(indexes.index1, indexes.index2));
  }, [indexes, filteredData])


  //перезапись массива отфильтрованных данных при каждом изменении значения фильтра
  useEffect(() => {
    const search = filter.toLowerCase();
    if (search) {
      let result = [];
      result = data.filter(item => item.firstName.toLowerCase().includes(search) || item.lastName.toLowerCase().includes(search) || item.email.toLowerCase().includes(search));
      setFilteredData(result);
    }
    else {
      setFilteredData(data);
    }
  }, [filter, data])


  //функция сортировки и переотрисовки элементов при нажатии на заголовок каждой колонки
  function sortBy(key, arrowNumber) {
    let arrowValue = '';
    arrows[arrowNumber] === '⇑' ? arrowValue = '⇓' : arrowValue = '⇑';
    //меняем вид стрелки у нужной колонки при клике на ее заголовок
    setArrows({
      ...arrows,
      [arrowNumber]: arrowValue,
    })
    arrows[arrowNumber] === '⇑' ? sortItems(data, key) : data.reverse();
    setFilteredData(data);
    setShownData(data.slice(indexes.index1, indexes.index2));
  }

  //функция, которая запускает отрисовку компонента DisplayDetails 
  function onRowSelect(row) {
    setSelectedRow(row);
    setDisplayRow(true);
  }

  //функция для добавления нового пользователя в массив отфильтрованных данных при сабмите формы
  function onSubmit(values) {
    setData([
      values,
      ...filteredData
    ]);
  }

  //функция, запускающая отрисовку формы для добавления нового пользователя и меняющая текст кнопки
  function handleUserClick() {
    if (!userForm) {
      setUserForm(true);
      setButtonText('-');
    }
    else {
      setUserForm(false);
      setButtonText('+');
    }
  }

  return (
    <div className="App">
      <h1 className='heading'>Данные пользователей</h1>
      <div>
        <button className='data-button' onClick={() => setData(smallData)}>Загрузить данные о 32 пользователях</button>
        <button className='data-button' onClick={() => setData(bigData)}>Загрузить данные о всех пользователях</button>
      </div>

      {isLoading ? <Loading /> :
        <>
          <div className='cover'>
            <Search onButtonClick={setFilter} />
            <AddNewUser handleUserClick={handleUserClick} text={buttonText} />
          </div>
          {userForm && <AddUserForm onSubmit={onSubmit} />}
          <Table data={shownData} arrows={arrows} onSort={sortBy} onRowSelect={onRowSelect} />
          {displayRow && <DisplayDetails data={selectedRow} />}
          <Pagination itemsPerPage={usersPerPage} totalItems={filteredData.length} paginate={paginate} />
        </>
      }
    </div>
  );
}

export default App;
