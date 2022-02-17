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
    remain = parseFloat(document.getElementById("balance").innerText) - save_amount
    document.getElementById("remain").innerText = remain
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
    inputCondition("save")

    expense = expense_amount(food, rent, cloth)
    balance = balance_amount(income, expense)
    valueShow(expense, balance)
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