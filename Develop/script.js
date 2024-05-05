// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');




// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = []; // Array to store employee objects

  while (true) {
    let firstName;
    while (true) {
        firstName = prompt('First Name:');
        if (firstName === null) {
            return employees; // Exit the loop and function if user cancels
        } else if (firstName.trim() === '') {
            // Prompt again if nothing is entered
            alert('first name cannot be empty. Please enter first name.');
        } else {
            break; // Exit the loop if valid input is provided
        }
    }

    let lastName;
    while (true) {
        lastName = prompt('Last Name:');
        if (lastName === null) {
            return employees; // Exit the loop and function if user cancels
        } else if (lastName.trim() === '') {
            // Prompt again if nothing is entered
            alert('Last name cannot be empty. Please enter last name.');
        } else {
            break; // Exit the loop if valid input is provided
        }
    }
    

    let salary;
    while (true) {
      const salaryInput = prompt('Employee Salary:');
      if (salaryInput === null) {
        return employees; // Exit the loop and function if user cancels
      }
      salary = parseFloat(salaryInput); // Parse the input as a float
      if (!isNaN(salary)) break; // Exit the loop if a valid number is entered
      else alert('Invalid input. Please enter a valid number.'); // Notify user of invalid input
    }

    // employees.push({ firstName, lastName, salary }); // Add employee object to the array

    // Ask if the user wants to add another employee
    const addAnother = confirm('Do you want to add another employee?');
    if (!addAnother) {
      break; // Exit the loop if the user does not want to add another employee
    }
  }

  return employees;
};





// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Calculate the total salary of all employees
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);

  // Calculate the average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Log the average salary to the console using a template literal
  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`);
};






// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}





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
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
