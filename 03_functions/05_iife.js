// immediately invoked function expressions(IIFE)
// globel scoope ma variable polution thay aane ghatadva iife
//  function ne immediate call karav
(function chai(){
    console.log('DB CONNECTED');
})();
// arrow functrion in iife
(()=>{
    console.log('DB CONNECTED TWO')
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("param");

