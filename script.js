function DataTable(config, data) {
    let table = document.createElement('table');
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of config1.columns) {
        let th = document.createElement("th");
        let text = document.createTextNode(Object.values(key)[0]);
        th.appendChild(text);
        row.appendChild(th);
    }

    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
    document.querySelector(config.parent).appendChild(table);
}

const config1 = {
    parent: '#usersTable',
    columns: [
        { title: '№', value: 'id' },
        { title: 'Ім’я', value: 'name' },
        { title: 'Прізвище', value: 'surname' },
        { title: 'Вік', value: 'age' },
    ]
};

const users = [
    { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
    { id: 30051, name: 'Вася', surname: 'Васечкін', age: 15 },
    { id: 30052, name: 'Вася', surname: 'Васечкін', age: 15 },
    { id: 30053, name: 'Вася', surname: 'Васечкін', age: 15 },
    { id: 30054, name: 'Вася', surname: 'Васечкін', age: 15 },
];

DataTable(config1, users);


