// object

var book = {
    bookName: '"English For Competitive Exams"',
    writter: 'Md. Fazlul Haque',
    publications: "Professor's prokashon",
    edition: '17th',
    page: '1100'
}
function addstyle() {
    var x = document.getElementById("object");
    x.classList.add("text-primary");
}
function removestyle() {
    var y = document.getElementById("object");
    y.classList.remove("text-primary");
}
document.write("<br><br>I have an english book. Name is " + book.bookName +
    " writter is " + book["writter"] +
    "<br> Features of this book...... <br> Publication: " + book.publications +
    "<br> Edition: " + book.edition +
    "<br> page: " + book.page
);
document.write("<br>");


// array

var fib = [0, 1, 1, 2, 3];
document.write(fib[3]);
document.write("<br>")
// for loop in array
for (var i = 0; i < fib.length; i++) {
    document.write(fib[i]);
}
document.write("<br>");
// for in loop in array
for (var num in fib) {
    document.write(fib[num])
}
document.write("<br>")

// for in loop in object
for (var item in book) {
    document.write(book[item] + "<br>")
}

//array concate

var x = ["N", "A", "V", "A"];
var y = [" T", "O", "R", "I", " Q", "U", "L"];
var love = x.concat(y);
document.write(love);
document.write("<br>");

//aray form

var x = "i love you";
document.write(x);
document.write("<br>");

var y = Array.from(x);
document.write(y[2] + y[3] + y[4] + y[5]);
document.write("<br>");
//array filter
var x = [10, 22, 33, 25, 78, 50, 74];
function gater(num) {

    return num > 40;
}
var p = x.filter(gater);
document.write(p);
//js DOM
document.getElementById('one').innerHTML = "clicked";
document.getElementsByClassName("class")[2].innerHTML = "class-3 changed by index number";

//new-window
function win() {
    var w = window.open();
    w.document.open();
    w.document.write("This is new");
    w.document.close();

}
// number of tag which is same name
function alltagNumber() {
    var items = document.getElementsByTagName("p");
    var x = items.length;
    alert("Total p tag is = " + x);
}

// sum using DOM

function add() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    alert("Sum = " + result);
}