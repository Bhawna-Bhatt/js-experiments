// variables

let payRate = 17.30;
let hoursWorked = 45;
let grossPay = 0;

if (hoursWorked > 40) {

    grossPay = (40 * payRate) + (1.5 * payRate*(hoursWorked - 40));
    
}

else {
    grossPay = hoursWorked * payRate;
}

console.log("The Gross Pay is " + grossPay);