//closure
function makeAccount(init){
    let balance = init;
    return {
        withdraw: function(amount){
            if(balance - amount >= 0){
                balance -= amount;
                return "success you new balance is:" + balance;
            } else {
                return "not enough money"
            }
        },
        deposit: function(amount){
            balance += amount
            return "success you new balance is:" + balance;
        },
        checkBalance: function(){
            return "your balance is:" + balance;
        }
    }
}



//class
//is this class like an object constructor?
function MakeAccount(init){
    this.balance = init;  //MakeAccount.balance
    this.withdraw = function(amount){
        if(this.balance - amount >= 0){
            this.balance -= amount;
            return "success you new balance is:" + balance;
        }else {
            return "not enough money";
        }
    };
    this.deposit = function(amount){
        balance += amount
            return "success you new balance is:" + balance;
        }
    this.checkBalance = function(){
        return "your balance is:" + balance;
    }
}
let malikaAccount = new MakeAccount(1000);

//prototype usage/ create once to use on all
//it does not appear on every instance of account creation but can be used
//instead of putting all the functions inside the main object, create prototypes to be used whenever the function us used to create an account.
function MakeAccount(init){
    this.balance = init;
}

//creating a function for the instance of MakeAccount
MakeAccount.prototype.withdraw = function(amount){
    if(this.balance - amount >= 0){
        this.balance -= amount;
        return "success you new balance is:" + balance;
    }else {
        return "not enough money";
    }
};

MakeAccount.prototype.deposit = function(amount){
    balance += amount
        return "success you new balance is:" + balance;
    }

    MakeAccount.prototype.checkBalance = function(){
        return "your balance is:" + balance;
    }


    //create multiple
    //create class for a car

    function Car(model){
        this.miles = 0;
        this.model = model
    }

    Car.prototype.move = function(){
        this.miles++;
        return this.miles;
    }
    let malikaCar = new Car("vitz")
    malikaCar.move()
    malikaCar.move()
    let bcar = new Car("VW")
;

//class for a supercar
function SuperCar(model){
    this.miles = 0;
    this.model = model
}
Car.prototype.move = function(){
    this.miles++;
    return this.miles;
}
//every supercar will have car prototype
SuperCar.prototype = Car.prototype
let ferrari = new SuperCar("ferrari")
ferrari.move()

//supercar added prototype
SuperCar.prototype.luxury = function(){
    return "the owner of this car is rich";
}
//theluxury function added to supercar prototype is used on car as well, becasue any modification in one object appears on all objects connected, in this case SuperCar.prototype = Car.prototype
//to fix the issue so the objects are not attache together/linked, and only take copy of car prototype:
SuperCar.prototype = Object.create(Car.prototype);
//this creates a copy and does not link the 2 objects together