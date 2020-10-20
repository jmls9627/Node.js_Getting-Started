setTimeout(
    ()=>{
        console.log('Hello after 4 seconds');
    },
    4*1000
);
////////////////////////////////////////////////////
const func=()=>{
    console.log('hello after 4 seconds');
};

setTimeout(func,4*1000);