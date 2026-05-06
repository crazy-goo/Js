function X() {
    let a = 20;
    return function Y() {
        console.log(a);
    }
}
const res = X();
console.log(res);
res()