const assert = require('assert');

function add(a,b){
    return a+b+1;
}

try{
    assert.deepStrictEqual(add(2,3),5,'First test case failed');
    assert.deepStrictEqual(add(3,7),11);
    assert.deepStrictEqual(add(4,3),8);
    assert.deepStrictEqual(add(7,4),12);
}

catch(err){
    console.log(err.expected);
    console.log(err.actual);
    console.log(err.message);
}