window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });

    const satrtDate = document.querySelector('#startDate');
    const dateError = document.querySelector('.date-error');
    satrtDate.addEventListener('input', function() {
        if (satrtDate.value.length == 0) {
            dateError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).startDate = startDate.value;
            dateError.textContent = "";
        } catch (e) {
            dateError.textContent = e;
        }
    });
});