function valueParsing(input) {
    value = parseFloat(document.getElementById(input + "-input").value);
    return value;

}


document.getElementById("calculate-button").addEventListener("click", function() {

    income = valueParsing("income");
    food = valueParsing("food");
    rent = valueParsing("rent");
    cloth = valueParsing('cloth');
    save = valueParsing("save");

    // console.log(income)
    // console.log(food)
    // console.log(rent)
    // console.log(cloth)
    // console.log(save)


});