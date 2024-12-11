nums = document.getElementById("nums");
prevNum = 0;
newNum = 0;
operator = "null";

document.getElementById("C").addEventListener("click", function (event) {
    nums.innerHTML = 0;
    prevNum = 0;
    newNum = 0;
    operator = "null";
});

document.getElementById("arrow").addEventListener("click", function (event) {
    nums.innerHTML = nums.innerHTML.substring(0, nums.innerHTML.length - 1);
    if (nums.innerHTML.length == 0) {
        nums.innerHTML = "0";
    }
});

document.getElementById("0").addEventListener("click", function (event) {
    addToString("0");
});

document.getElementById("1").addEventListener("click", function (event) {
    addToString("1");
});

document.getElementById("2").addEventListener("click", function (event) {
    addToString("2");
});

document.getElementById("3").addEventListener("click", function (event) {
    addToString("3");
});

document.getElementById("4").addEventListener("click", function (event) {
    addToString("4");
});

document.getElementById("5").addEventListener("click", function (event) {
    addToString("5");
});

document.getElementById("6").addEventListener("click", function (event) {
    addToString("6");
});

document.getElementById("7").addEventListener("click", function (event) {
    addToString("7");
});

document.getElementById("8").addEventListener("click", function (event) {
    addToString("8");
});

document.getElementById("9").addEventListener("click", function (event) {
    addToString("9");
});

document.getElementById("+").addEventListener("click", function (event) {
    if (operator == "null") {
        prevNum = parseInt(nums.innerHTML)
    } else {
        operate();
    }
    operator = "+";
    nums.innerHTML = "0";
});

document.getElementById("-").addEventListener("click", function (event) {
    if (operator == "null") {
        prevNum = parseInt(nums.innerHTML)
    } else {
        operate();
    }
    operator = "-";
    nums.innerHTML = "0";
});

document.getElementById("x").addEventListener("click", function (event) {
    if (operator == "null") {
        prevNum = parseInt(nums.innerHTML)
    } else {
        operate();
    }
    operator = "x";
    nums.innerHTML = "0";
});

document.getElementById("divide").addEventListener("click", function (event) {
    if (operator == "null") {
        prevNum = parseInt(nums.innerHTML)
    } else {
        operate();
    }
    operator = "/";
    nums.innerHTML = "0";
});

document.getElementById("=").addEventListener("click", function (event) {
    if (!(operator=="null")) {
        operate();
        nums.innerHTML = prevNum;
    }
    operator = "null";
});

function addToString(num) {
    numbers = nums.innerHTML;
    if (!(numbers[0] == '0')) {
        numbers = numbers + num;
    } else {
        numbers = num;
    }
    nums.innerHTML = numbers;
}

function operate() {
    if (operator == "+") {
        newNum = parseInt(nums.innerHTML);
        prevNum += newNum;
    } else if (operator == "-") {
        newNum = parseInt(nums.innerHTML);
        prevNum -= newNum;
    } else if (operator == "x") {
        newNum = parseInt(nums.innerHTML);
        prevNum *= newNum;
    } else if (operator == "/") {
        newNum = parseInt(nums.innerHTML);
        prevNum /= newNum;
    }
    newNum = 0
}