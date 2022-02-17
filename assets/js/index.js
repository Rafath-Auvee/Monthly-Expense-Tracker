const messages = document.getElementsByClassName("message")

// display none all error message using loop

for (const message of messages) {
    message.style.display = "none";
}

// Parsing all value 

function valueParsing(input) {
    value = parseFloat(document.getElementById(input + "-input").value);
    return value;
}

// calculate total expense

function expense_amount(food, rent, cloth) {
    total_expense = (food + rent + cloth)
    return total_expense
}

// calculate balance 

function balance_amount(income, expense) {
    balance = income - expense
    return balance
}

// showing expense and balance value using innerText 

function valueShow(expense, balance) {
    document.getElementById("expense").innerText = expense
    document.getElementById("balance").innerText = balance
}

// calculate savings value using income and save input

function saving(income, save) {
    return (income * save) / 100
}

// save function to getElementById income and save_amount then finding the remaining balance 

function saveFunction() {
    save = valueParsing("save");
    income = valueParsing("income");
    save_amount = saving(income, save)
    document.getElementById("save").innerText = save_amount
    balence = parseFloat(document.getElementById("balance").innerText)
    remain = parseFloat(document.getElementById("balance").innerText) - save_amount
    document.getElementById("remain").innerText = remain
    inputCondition("save")
    saveCondition("save", save_amount, balence)
}

//checking saving condition

function saveCondition(input, save, balance) {
    console.log("saving condition" + save + " " + balence)
        // document.getElementById(input + "-input").value = ""
        //getting value using input name + "-error" 
    string = document.getElementById(input + "-error")

    if (balence <= 0) {
        // if zero then no savings 
        string.style.display = "block";
        string.innerText = "Balance can't be zero or Negative, so No Savings"
        document.getElementById("save").innerText = 0
        document.getElementById("remain").innerText = 0
    } else if (isNaN(save)) {
        // checking NaN
        string.style.display = "block";
        string.innerText = "Saving amount is not a number. Invalid Input"
        document.getElementById("save").innerText = 0
        document.getElementById("remain").innerText = 0
    } else if (balance <= save) {
        //checking if balance is less than savings
        string.style.display = "block";
        string.innerText = "Saving can't be greater than balance"
        document.getElementById("save").innerText = 0
        document.getElementById("remain").innerText = 0
    } else {
        string.style.display = "none";
    }
}

// checking expense condition .

function expenseCondtion(input, income, expense) {

    console.log("expense condition")
    string = document.getElementById(input + "-error")

    // checking income and expense 
    if (income < expense) {
        string.style.display = "block";
        string.innerText = "Expense can't be greater than income"
        document.getElementById("expense").innerText = "0"
        document.getElementById("balance").innerText = "0"
    }
    // checking NaN 
    else if (isNaN(income) || isNaN(expense)) {
        console.log("checking NaN")
        document.getElementById("expense").innerText = "0"
        document.getElementById("balance").innerText = "0"
    }
    // showing the output 
    else {
        string.style.display = "none";
        valueShow(expense, balance)
    }
}

//calculation and parsing values then checking input condition using functions

function calculation() {
    // parsing through function 
    income = valueParsing("income");
    food = valueParsing("food");
    rent = valueParsing("rent");
    cloth = valueParsing('cloth');

    // input condition 
    inputCondition("income")
    inputCondition("food")
    inputCondition("rent")
    inputCondition("cloth")

    // passing value in the function 
    expense = expense_amount(food, rent, cloth)
    balance = balance_amount(income, expense)
    expenseCondtion('total', income, expense)

}

// checking input conditions  

function inputCondition(input) {
    value = parseFloat(document.getElementById(input + "-input").value);
    string = document.getElementById(input + "-error")
    if (isNaN(value)) {
        string.style.display = "block";
        string.innerText = "Not a number or Empty Value"
    } else if (value <= 0) {
        string.style.display = "block";
        string.innerText = "Value can't be zero or negative"
    } else {
        string.style.display = "none";
        // document.getElementById(input + "-input").value = ""
    }
}

// event listener for calculate 

document.getElementById("calculate-button").addEventListener("click", function() {
    calculation()
});

// event listener for savings 

document.getElementById("save-button").addEventListener("click", function() {
    saveFunction()
});