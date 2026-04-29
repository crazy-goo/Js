function removeFirstDuplicates(arr){
    let set = new Set(); //inti set in js
    for(let x of arr){
        if(set.has(x)){
            return x;
        }
        set.add(x);
    }
    return - 1;
}


function isPalindrome(str){
    // return str === str.split("").reverse().join("");

    const n = str.length;
    const acctualStr  = str;
    let myStr = "";
    
    for(let i = n - 1;i>= 0;i--){
        myStr += acctualStr[i];
    }
    return acctualStr === myStr;
}

function twoSum(arr, target){

    let index = [];
    const map = new Map();

    for(let i = 0;i<arr.length;i++){
        if(map.has(target - arr[i])){
            index.push(map.get(target - arr[i]));
            index.push(i);
            return index;
        }
        map.set(arr[i], i);
    }
    return [-1, -1];
}

function cntFrequency(arr){

    const map = new Map();
    for(let x of arr){
        map.set(x, (map.get(x) || 0 ) + 1);
    }
    
    for(let [key, value] of map){
        console.log(`${key} ->  ${value}`);
    }
}

function findEvenNum(arr){
    return arr.filter( x => x%2 == 0);
}



function findSndMax(arr){
    let fstMax = -Infinity;
    for(let x of arr){
        fstMax = Math.max(fstMax, x);
    }
    let sndMax = -Infinity;
    for(let x of arr){
        if(x != fstMax){
            sndMax = Math.max(sndMax, x);
        }
    }
    return sndMax;
}

function removeDuplicates(arr){

    const set = new Set();
    for(let x of arr){
        set.add(x);
    }
    let res = [];
    for(let x of set){
        res.push(x);
    }
    return res;
}

function findMissingNumber(arr, n){

    let nthNumberSum = n * (n + 1)/2;

    let sum = 0;
    for(let x of arr){
        sum += x;
    }
    return nthNumberSum - sum;
}

function moveZeroes(arr){
    let cntNonZeroes = []
    let zeroes = [];

    for(let x of arr){
        if(x == 0){
            zeroes.push(x);
        }else{
            cntNonZeroes.push(x);
        }
    }
    return cntNonZeroes.concat(zeroes);
}


function fstNonRepeatingChar(str){
    const map = new Map();
    for(let x of str){
        map.set(x, (map.get(x) || 0 ) + 1);
    }

    for(let x of str){
        if(map.get(x) == 1){
            return x;
        }
    }
}

function mejorityElement(arr){
    const map = new Map();
    for(let x of arr){
        map.set(x, (map.get(x) || 0 ) + 1);
    }
    for(let [k, v] of map){
        if(v > arr.length/2){
            return k;
        }
    }
    return -1;
}

function main(){
    /*
        let arr = [1, 2, 3, 4, 5, 1, 2, 3];
        console.log(removeFirstDuplicates(arr));
    

        let str = "madam";
        console.log(isPalindrome(str));
        

        let arr = [2,5,11,7,15];
        let target = 9;
        console.log(twoSum(arr, target));

        

        let arr = [10, 20, 30, 40, 50, 10, 20, 30];
        cntFrequency(arr);

    

        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        console.log(findEvenNum(arr));

        let arr = [44, 10, 20, 30, 40, 50];
        console.log(findSndMax(arr));

    

        let arr = [1, 2, 3, 4, 5, 1, 2, 3];
        console.log(removeDuplicates(arr));
    

        let arr = [1, 2, 4, 5];
        console.log(findMissingNumber(arr, 5));
   

        console.log(moveZeroes([1, 2, 4, 0, 5, 0]));
     

        let str = "leetcode";
        console.log(fstNonRepeatingChar(str));
    */

        let arr = [2, 2, 1];
        console.log(mejorityElement(arr));
}

main();