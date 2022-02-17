const messages = document.getElementsByClassName("message")

for (const message of messages) {
    message.style.display = "none";
}

function valueParsing(input) {
    value = parseFloat(document.getElementById(input + "-input").value);
    // document.getElementById(input + "-input").value = ""
    return value;
}


function expense_amount(food, rent, cloth) {
    total_expense = (food + rent + cloth)
    return total_expense
}

function balance_amount(income, expense) {
    balance = income - expense
    return balance
}

function valueShow(expense, balance) {
    document.getElementById("expense").innerText = expense
    document.getElementById("balance").innerText = balance
}

function saving(income, save) {
    return (income * save) / 100
}


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

function saveCondition(input, save, balance) {
    console.log("saving condition" + save + " " + balence)
    string = document.getElementById(input + "-error")

    if (balence <= 0) {
        string.style.display = "block";
        string.innerText = "Balance can't be zero or Negative, so No Savings"
        document.getElementById("save").innerText = 0
        document.getElementById("remain").innerText = 0
    } else {
        string.style.display = "none";
    }
}

function expenseCondtion(input, income, expense) {
    console.log("expense condition")
    string = document.getElementById(input + "-error")
    if (income < expense) {
        string.style.display = "block";
        string.innerText = "Expense can't be greater than income"
        document.getElementById("expense").innerText = "0"
        document.getElementById("balance").innerText = "0"
    } else if (isNaN(income) || isNaN(expense)) {
        console.log("checking NaN")
        document.getElementById("expense").innerText = "0"
        document.getElementById("balance").innerText = "0"
    } else {
        string.style.display = "none";
        valueShow(expense, balance)
    }
}

function calculation() {

    income = valueParsing("income");
    food = valueParsing("food");
    rent = valueParsing("rent");
    cloth = valueParsing('cloth');

    inputCondition("income")
    inputCondition("food")
    inputCondition("rent")
    inputCondition("cloth")

    expense = expense_amount(food, rent, cloth)
    balance = balance_amount(income, expense)
    expenseCondtion('total', income, expense)


}

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
    }
}

document.getElementById("calculate-button").addEventListener("click", function() {
    calculation()
});

document.getElementById("save-button").addEventListener("click", function() {
    saveFunction()
});