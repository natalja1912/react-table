

//функция сортировки данных в таблице для строк и чисел
function sortItems(data, key) {
    data.sort(function (a, b) {
        if (typeof a[key] === 'string') {
            //если значения в колонке - строки, то их приводим к нижнему регистру, чтобы правильно выполнить сортировку
            if (a[key].toLowerCase() > b[key].toLowerCase()) {
                return 1;
            }
            if (a[key].toLowerCase() < b[key].toLowerCase()) {
                return -1;
            }
            return 0;
        }
        else {
            return (a[key] - b[key])
        }
    });
    return data;
}



export default sortItems;