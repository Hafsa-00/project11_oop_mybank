// interface Costumer{
//     firstName:string,
//     lastName:string,
//     gender:boolean,//BOOLEN  T:male,F:female
//     age:number,
//     mobileNumber:number,
// }
export class Customerinfo {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    constructor(firstName, lastName, gender, age, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
    }
}
export class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    constructor(firstName, lastName, gender, age, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
    }
}
