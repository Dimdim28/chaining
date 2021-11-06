let a = 7;

let b = new Promise(function (resolve, reject){
    setTimeout(()=>{
        resolve(a = 90);
    }, 1000);
})
console.log(a);
b.then(function(){
console.log(a);
});

const promise1 = new Promise(resolve => resolve('value1'));
console.dir(promise1);
promise1.then(console.log);

const promise2 = new Promise((resolve, reject)=>{
    reject(new Error('I have no value'));
});

console.dir(promise2);
promise2.then(console.log).catch(console.log);

const promise3 =Promise.resolve('value3');
console.log(promise3);
promise3.then(console.log);

const promise4 = Promise.reject(new Error('I have no value2'));
console.dir(promise4);
promise4.then(console.log).catch(console.log);

const fs = require('fs');

const readFile=(filename, encoding)=>
    new Promise((resolve, reject) =>
    fs.readFile(filename,encoding,(err,data)=>{
        if(err) reject(err);
        else resolve(data.toString());
}));

readFile('file1.txt', 'utf8')
.then(data =>{
    console.log(data);

    return fs.readFile('proto.js','utf8');
})
.then(data =>{
    console.log(data);
})
