let sum = (a,b)=>{
    return a+b;
};

let multi = (a,b)=>{
    return a*b;
}

let sub = (a,b)=>{
    return a-b;
}

let calculate = (a,b, callback)=>{
    return callback(a,b);

};

let r1 = calculate(10,20,sub);
console.log(r1);