var pistring = "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862";
var currNum = "3.14";
document.addEventListener("DOMContentLoaded", function() {
    var num = document.querySelector("body > div > h2");
    num.innerHTML = currNum;
    var halted = false;
    document.addEventListener("keypress", function(key) {
        if (isNaN(key.key)) return;
        if (halted && key.key == pistring[currNum.length-1]) {
            currNum = "3.14"
            num.innerHTML = currNum;
            h3 = document.querySelector('h3')
            h3.innerHTML = "";
            halted=false;
            return;
        }
        if (halted) return;
        currNum += key.key;
        if (currNum == pistring.slice(0, currNum.length))
            num.innerHTML += key.key;
        else {
            num.innerHTML += "<span class='wrong'>" + key.key + '</span>';
            halted = true;
            var h3 = document.querySelector('h3');
            h3.innerHTML = "<span class='wrong'>No.</span> <br/>The correct digit was <span class='correct'>"+pistring[currNum.length-1]+"</span>";
            h3.innerHTML += "<br/>Press the <em class='correct'>correct</em> digit to try again.";
        }
    });
});