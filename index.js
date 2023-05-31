/*1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

поле, що зберігає радіус кола;
get-властивість, яке повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, яке повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.

class Circle {
    constructor(radius) {
      this._radius = radius;
    }
    get radius() {
      return this._radius;
    }
    set radius(radius) {
      this._radius = radius;
    }
    get diameter() {
      return this._radius * 2;
    }
    calculateArea() {
      return Math.PI * this._radius ** 2;
    }
    calculatePerimeter() {
      return 2 * Math.PI * this._radius;
    }
  }

const myCircle = new Circle(3); 

console.log(myCircle.radius); 
console.log(myCircle.diameter);
console.log(myCircle.calculateArea()); 
console.log(myCircle.calculatePerimeter()); */


/*2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.



class Marker {
    constructor(color, inkPercentage) {
      this.color = color;
      this.inkPercentage = inkPercentage;
    }
  
    write(text) {
      const inkRequired = text.length * 0.5;
      if (inkRequired <= this.inkPercentage) {
        console.log(`Writing: ${text}`);
        this.inkPercentage -= inkRequired;
      } else {
        console.log('Not enough ink!');
      }
    }
  }*/

  /*3) Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

class Employee {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
  }

  class EmpTable {
    constructor(employees) {
      this.employees = employees;
    }

    getHtml() {
      let table = document.createElement('table');
      let headerRow = document.createElement('tr');
      let nameHeader = document.createElement('th');
      let positionHeader = document.createElement('th');

      nameHeader.textContent = 'Name';
      positionHeader.textContent = 'Position';

      headerRow.appendChild(nameHeader);
      headerRow.appendChild(positionHeader);
      table.appendChild(headerRow);

      for (const employee of this.employees) {
        let row = document.createElement('tr');
        let nameCell = document.createElement('td');
        let positionCell = document.createElement('td');

        nameCell.textContent = employee.name;
        positionCell.textContent = employee.position;

        row.appendChild(nameCell);
        row.appendChild(positionCell);
        table.appendChild(row);
      }

      return table;
    }
  }

  // Створюємо масив працівників банку
  const employees = [
    new Employee('Illia Lobach', 'Manager'),
    new Employee('Helena Maltseva', 'Accountant.'),
    new Employee('Ira Bokhonska', 'Teller'),
    new Employee('Ksenia Tretiak', 'Loan Officer')
  ];

  const empTable = new EmpTable(employees);
  const tableHtml = empTable.getHtml().outerHTML;
  const employeeTable = document.getElementById('employeeTable');
  employeeTable.innerHTML = tableHtml;*/

