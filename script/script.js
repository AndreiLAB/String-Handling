
function countingLs(str, char) {
    return str.split(char).length - 1;
    
}
function FindL(){
    var myString = document.getElementById("Ls").value;
    let result = myString + " contains " + String(parseInt(countingLs(myString, "l")) + parseInt(countingLs(myString, "L"))) + "xL characters."
    document.getElementById("LCount").innerHTML = result;
}   


               
function FindNoice(){
    var str = document.getElementById("Wovel").value;
    var count = 0
    for (var i = 0; i < str.length; i++){
        if (["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"].includes(str[i])){
            count++
        }
    }
    let result = str + " contains " + (count) + " wovels."
    document.getElementById("Saying").innerHTML = result;
}   

function checker(str) {
    str = str.toLowerCase().replaceAll(" ", '');
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return 0;
        }
    }
    return 1;
}

function Palindrome(){
    let result
    var str = document.getElementById("Palindrome").value;
    if (str.length > 0){
        if (checker(str) == 1){
            result = str + " is a palindrome."
        }else{
            result = str + " isn't palindrome."
        }
    }
    document.getElementById("palindromeWord").innerHTML = result;
}