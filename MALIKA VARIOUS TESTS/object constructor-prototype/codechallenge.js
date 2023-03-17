let balance = 100
function withdraw(amount){
    if(balance - amount >= 0){
        balance = balance - amount;
        return "new balance" + balance

    }else{
        return "poor, no money!"
    }
}

//create a closure, a function inside another function to make the variable inaccessible to the global
//jspaint.app

function makeAccount(){
    let balance = 1000
function withdraw(amount){
    if(balance - amount >= 0){
        balance = balance - amount;
        return "new balance" + balance

    }else{
        return "poor, no money!"
    }
}
return withdraw;
}
let malikaAccount = makeAccount();
console.log(malikaAccount(200))
console.log(malikaAccount2(200)) // this is an error because Js created a copy of the original and balance starts counting again from the beginning.  So if you withdraw from account 1 it does not 

function makeAccount(){
    let balance = 1000
function withdraw(amount){
    if(balance - amount >= 0){
        balance = balance - amount;
        return "new balance is" + balance

    }else{
        return "poor, no money!"
    }
}
function deposit(amount){
    return "your new balance is" + balance;
}
return {w: withdraw, d: deposit}; //an object returned
}

malikaAccount1.d(100) // the amount deposited
malikaAccount1.w(20) // amount withdrawn
//

//we can make it start from any amount by adding intialize parameter

function makeAccount(initial, initialPassword){
    let balance = initial
    let password = initialPassword
function withdraw(amount, confirmPassword){
    if(balance - amount >= 0){
        if(confirmPassword === password){
            balance = balance - amount;
        }
        
        return "new balance is" + balance

    }else{
        return "poor, no money!"
    }
}
function deposit(amount){
    return "your new balance is" + balance;
}
return {w: withdraw, d: deposit}; //an object returned
}

//create and return functions. called closures with adding methods because we are now returning multiple functions 
function makeAccount(initial, initialPassword){}
    let balance = initial
    let password = initialPassword
return {
    balance: initial,
    password: initialPassword
}
    function withdraw(amount, confirmPassword){
    if(balance - amount >= 0){
        if(confirmPassword === password){
            balance = balance - amount;
        }
        
        return "new balance is" + balance

    }else{
        return "poor, no money!"
    }
}
function deposit(amount){
    return "your new balance is" + balance;
}
return {w: withdraw, d: deposit};












