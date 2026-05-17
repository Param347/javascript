const { use } = require("react");

 let a=300 // aahi a is globel scope if sivay jya a use thase tya 300 print thase 
if(true){
    // aahi scope define che braket ni bar let ane const ne use na kari sakiye 
    let a=10
    const b=20
    var c=30
    //  a is a local scope aahi a 10 print thasee
    console.log("Inner: ",a);
}

// console.log(a);
// console.log(b);
console.log(c);

