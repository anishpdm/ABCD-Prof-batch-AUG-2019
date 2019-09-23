add= (a,b,callback)=>{
var z=a+b;


callback(z);

}

display=(result)=>{
    console.log("Task Completed. Result is"+result)
}

var x=10;
var y=12;

add(x,y,display);
