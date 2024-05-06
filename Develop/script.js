const addEmployeesBtn = document.querySelector('#add-employees-btn');
const collectEmployees = function() {
  const employeesArray = []; 
  while (true) {
    let firstName;
    while (true) {
        firstName = prompt('Employees First Name:');
        if (firstName === null) {
            return employeesArray; 
        } else if (firstName.trim() === '') {
            alert('first name cannot be empty. Please enter first name.');
        } else {
            break; 
        }
    }

    let lastName;
    while (true) {
        lastName = prompt('Employees Last Name:');
        if (lastName === null) {
            return employeesArray; 
        } else if (lastName.trim() === '') {          
            alert('Last name cannot be empty. Please enter last name.');
        } else {
            break; 
        }
    }
    
    let salary;
    while (true) {
      const salaryInput = prompt('Employee Salary:');
      if (salaryInput === null) {
        return employeesArray; 
      }
      salary = parseFloat(salaryInput);
      if (!isNaN(salary)) break; 
      else alert('Invalid input. Please enter a valid number.'); 
    }

    employeesArray.push({firstName, lastName, salary});
    const addAnother = confirm('Do you want to add another employee?');
    if (!addAnother) {
      break; 
    }
  }

  return employeesArray;
};

const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`);
};

const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log('No employees available.');
    return null;
  }

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congrats to our randomly picked Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);

  return randomEmployee;
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
