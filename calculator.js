function calc() {
    var input1 = parseInt(document.querySelector('#value1').value);
    var input2 = parseInt(document.querySelector('#value2').value);
    var op = document.querySelector('#operator').value;
    var answer;

    if (op == 'add') {
        answer = input1 + input2;
    }else if (op == 'min') {
        answer = input1 - input2;
    }else if (op == 'div') {
        answer = input1 / input2;
    }else if (op == 'mul') {
        answer = input1 * input2;
    }

    document.querySelector('#result').innerHTML = answer;

}