

var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypevalue, resultTypevalue;

document.getElementById("input").onkeyup = function () { myResult() };
document.getElementById("result").onkeyup = function () { myResult() };
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);



function myResult() {

    inputTypevalue = inputType.value;
    resultTypevalue = resultType.value;


    // meter section
    if (inputTypevalue === "meter" && resultTypevalue === "kilometer") {
        result.value = Number(input.value) * 0.001;
    } else if (inputTypevalue === "meter" && resultTypevalue === "centimeter") {
        result.value = Number(input.value) * 100;

    } else if (inputTypevalue === "meter" && resultTypevalue === "meter") {
        result.value = input.value
    } else if (inputTypevalue === "meter" && resultTypevalue === "inch") {
        result.value = Number(input.value) * 39.37;
    } else if (inputTypevalue === "meter" && resultTypevalue === "yard") {
        result.value = Number(input.value) * 1.0936;
    } else if (inputTypevalue === "meter" && resultTypevalue === "feet") {
        result.value = Number(input.value) * 3.280;
    }
    //kilometer section
    if (inputTypevalue === "kilometer" && resultTypevalue === "meter") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypevalue === "kilometer" && resultTypevalue === "centimeter") {
        result.value = Number(input.value) * 100000;

    } else if (inputTypevalue === "kilometer" && resultTypevalue === "kilometer") {
        result.value = input.value
    } else if (inputTypevalue === "kilometer" && resultTypevalue === "inch") {
        result.value = Number(input.value) * 39370;
    } else if (inputTypevalue === "kilometer" && resultTypevalue === "yard") {
        result.value = Number(input.value) * 1094;
    } else if (inputTypevalue === "kilometer" && resultTypevalue === "feet") {
        result.value = Number(input.value) * 3281;
    }
    //centimeter section
    if (inputTypevalue === "centimeter" && resultTypevalue === "kilometer") {
        result.value = Number(input.value) * 0.00001;
    } else if (inputTypevalue === "centimeter" && resultTypevalue === "meter") {
        result.value = Number(input.value) * 0.01;

    } else if (inputTypevalue === "centimeter" && resultTypevalue === "centimeter") {
        result.value = input.value
    } else if (inputTypevalue === "centimeter" && resultTypevalue === "inch") {
        result.value = Number(input.value) * 0.39370;
    } else if (inputTypevalue === "centimeter" && resultTypevalue === "yard") {
        result.value = Number(input.value) * 0.010936113;
    } else if (inputTypevalue === "centimeter" && resultTypevalue === "feet") {
        result.value = Number(input.value) * 0.0328;
    }

    // inch section
    if (inputTypevalue === "inch" && resultTypevalue === "kilometer") {
        result.value = Number(input.value) / 39370;
    } else if (inputTypevalue === "inch" && resultTypevalue === "meter") {
        result.value = Number(input.value) * 39.37;

    } else if (inputTypevalue === "inch" && resultTypevalue === "inch") {
        result.value = input.value
    } else if (inputTypevalue === "inch" && resultTypevalue === "centimeter") {
        result.value = Number(input.value) * 2.54;
    } else if (inputTypevalue === "inch" && resultTypevalue === "yard") {
        result.value = Number(input.value) / 36;
    } else if (inputTypevalue === "inch" && resultTypevalue === "feet") {
        result.value = Number(input.value) / 12;
    }
    // yard section
    if (inputTypevalue === "yard" && resultTypevalue === "kilometer") {
        result.value = Number(input.value) / 1094;
    } else if (inputTypevalue === "yard" && resultTypevalue === "meter") {
        result.value = Number(input.value) / 1.094;

    } else if (inputTypevalue === "yard" && resultTypevalue === "yard") {
        result.value = input.value
    } else if (inputTypevalue === "yard" && resultTypevalue === "centimeter") {
        result.value = Number(input.value) * 91.44;
    } else if (inputTypevalue === "yard" && resultTypevalue === "inch") {
        result.value = Number(input.value) * 36;
    } else if (inputTypevalue === "yard" && resultTypevalue === "feet") {
        result.value = Number(input.value) * 3;
    }

    // feet section
    if (inputTypevalue === "feet " && resultTypevalue === "kilometer") {
        result.value = Number(input.value) / 3281;
    } else if (inputTypevalue === "feet " && resultTypevalue === "meter") {
        result.value = Number(input.value) / 3.281;

    } else if (inputTypevalue === "feet " && resultTypevalue === "feet ") {
        result.value = input.value
    } else if (inputTypevalue === "feet " && resultTypevalue === "centimeter") {
        result.value = Number(input.value) * 30.48;
    } else if (inputTypevalue === "feet " && resultTypevalue === "inch") {
        result.value = Number(input.value) * 12;
    } else if (inputTypevalue === "feet " && resultTypevalue === "yard") {
        result.value = Number(input.value) / 3;
    }
}
function checkCondition() {
    var inputValue = document.getElementById("input").value;
    var pattern = (/^[0-9.]+$/);
    if (!pattern.test(inputValue)) {
        document.getElementById("input");
        document.getElementById("warning").innerHTML = "(Please enter only numbers only)";

    } else {
        document.getElementById("input");
        document.getElementById("warning").innerHTML = "";

    }
    var textBox = document.getElementById("input");
     var warning = document.getElementById("warning");

    textBox.addEventListener("input", function () {
        if (textBox.value === "") {
            warning.style.display = "none";
            
        } else {
            warning.style.display = "block";
        }
    });


}

