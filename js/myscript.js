function readValues(){

    var a= parseInt(document.getElementById('name').value);
    var b=parseInt(document.getElementById('rollno').value);
var c=a+b;
console.log(c);

document.getElementById("result").innerHTML=c;

}