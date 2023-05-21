const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button_design');

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
        const inputValue = button.textContent;
        input.value += inputValue;
    });
}
let result = document.getElementsByClassName("equal_button_design")[0]
result.addEventListener("click", function () {
    let string = input.value
    let output = eval(string)
    input.value = output
})
let field = document.getElementsByClassName("clr_button_design")[0]
field.addEventListener("click", function () {
    input.value = ""
}
);