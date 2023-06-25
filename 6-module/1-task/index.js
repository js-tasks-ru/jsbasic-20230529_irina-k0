/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.createTable();
  }

  createTable() {
    if (!this.rows) {
      return;
    }
    let theadTemplate = `
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>`;

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    thead.innerHTML = theadTemplate;

    for (let row of this.rows) {
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button onclick="(() => this.closest('tr').remove())()">X</button></td>`;
        tbody.append(tr);
    }
    
    table.append(thead);
    table.append(tbody);
    
    this.elem = table;
  }
}
