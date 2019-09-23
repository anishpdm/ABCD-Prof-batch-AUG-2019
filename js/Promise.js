var myPromise = new Promise( (resolve,reject)=>{

var myGrade="A";

if(myGrade=="A+"){
resolve();
}
else{
reject();
}

} );

myPromise.then( ()=>{
    console.log('Promise Satisfied');
} ).catch(()=>{
    console.log('Promise Rejected');
} )



