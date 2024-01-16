// class Car{
//     constructor(name, wheels, doors, engines){
//         this.name = name;
//         this.wheels = wheels;
//         this.doors = doors;
//         this.engines = engines;
//     }
// }

// const ferrari = new Car("Ferrari", 4, 2, "V8");
// const Venue = new Car("Venue", 4, 2, "V8");
// const BMW = new Car("BMW", 4, 2, "V8");
// const Toyota = new Car("Toyota", 4, 2, "V8");
// console.log(ferrari);
// console.log(Venue);
// console.log(BMW);
// console.log(Toyota);

class Bankaccount {
    constructor(name, accno, balance){
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }

    getBalance(){
        return `The balance is ${this.balance}`;
    }

    withdraw (amount){
        if(this.balance >= amount){
            this.balance = this.balance - amount;
            return this.getBalance();
        } else {
            return `Insufficient funds. ${this.getBalance()}`;

        }

        }
    }

const kashyup = new Bankaccount("kashyup", 150, 1_00_000)
const kavya = new Bankaccount("kavya", 200, 2_00_000)
const Manoaj = new Bankaccount("Manoaj", 200, 2_00_000)

console.log(kashyup.getBalance());
console.log(kavya.getBalance());
console.log(Manoaj.getBalance());

console.log(kashyup.withdraw(2_00_000));
console.log(kavya.withdraw(2_00_000));
console.log(Manoaj.withdraw(2_00_000));