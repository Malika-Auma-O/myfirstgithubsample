import { add, age, malika} from "./add.js";
import { sub } from "./subtract.js";


function calculate(a, b, op){
    if(op === "+") {
        add(a,b)
    }else if (op === "-") {
        sub(a,b)
    } else {
        console.log("wrong po")
    }
}

/* 
we have 3 files, one is calculate, others are add and subtract
ES6 Modules uses export and import methods to connect

*/