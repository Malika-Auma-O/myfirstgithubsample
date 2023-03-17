import { add} from "./add";
import { sub } from "./sub";


function calculate(a, b, op){
    if(op === "+") {
        add(a,b);
    }else if (op === "-") {
        sub(a,b);
    } else {
        console.log("wrong op");
    }
}

calculate(7, 3, "+");
calculate(10, 3, "-");
calculate(7, 3, "*")
