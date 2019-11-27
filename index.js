function isEmpty(str) {
    return (!str || str.length === 0);
}

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) > -1) {
            return true;
        }
    }
    return false;
}

function checkString(str, msg) {
    if (isWhiteSpace(str) || isEmpty(str)) {
        alert(msg);
        return false;
    } else return true;
}

function checkRadio(str, msg) {
    if(str==="f_k" || str==="f_m"){
        return true;
    }else alert(msg);
    return false;
}

function checkSelect(str, msg) {
    if(str==="f_memy" || str==="f_opinia" || str==="f_inne"){
        return true;
    }else alert(msg);
    return false;
}

function checkEmail(str) {
    if (isWhiteSpace(str)) alert("Podaj właściwy e-mail"); else {
        at = str.indexOf("@");
        if (at < 1) {
            alert("Nieprawidłowy e-mail");
            return false;
        } else {
            var l = -1;
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                if (c == ".") l = i;
            }
            if ((l < (at + 2)) || (l == str.length - 1)) alert("Nieprawidłowy e-mail");
        }
        return true;
    }
}

function validate(form) {
    checkString(form.elements["f_imie"].value, "Błędne imię");
    checkString(form.elements["f_nazwisko"].value, "Błędne nazwisko");
    checkRadio(form.elements["f_plec"].value, "Musisz wybrać płeć");
    checkEmail(form.elements["f_email"].value);
    checkSelect(form.elements["f_temat"].value, "Musisz wybrać temat");
}

// function checkStringAndFocus(obj, msg) {
//     var str = obj.value;
//     var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
//     if (isWhiteSpace(str) || isEmpty(str)) {
//         document.getElementById(errorFieldName).innerHTML = msg;
//         obj.focus();
//         return false;
//     } else return true;
// }