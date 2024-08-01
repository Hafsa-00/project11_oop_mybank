
export class Customerinfo {
    constructor(
        public firstName: string,
        public lastName: string,
        public gender: string,
        public age: number,
        public mobileNumber: string
    ) {}
}
export class Customer {
    constructor(
        public firstName: string,
        public lastName: string,
        public gender: string,
        public age: number,
        public mobileNumber: string
    ) {}
}

//---bank acount
export interface BankAccount {
    debit(amount: number): void;
    credit(amount: number): void;
    getBalance(): number;
    
}


