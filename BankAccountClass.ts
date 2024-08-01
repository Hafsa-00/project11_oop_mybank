
import { Customer,Customerinfo,BankAccount } from "./costumerClass.js";
 class BankAccountImpl implements BankAccount {
    private balance: number = 0;
    private customer: Customer;

    constructor(customer: Customer) {
        this.customer = customer;
    }

    debit(amount: number): void {
        if (this.balance < amount) {
            console.log("Transaction canceled: Insufficient balance.");
        } else {
            this.balance -= amount;
            console.log(`Debited: $${amount}. New balance: $${this.balance}`);
        }
    }

    credit(amount: number): void {
        this.balance += amount;
        if (amount > 100) {
            this.balance -= 1; // Deduct $1 if credit amount is more than $100
            console.log("A $1 fee has been deducted for crediting more than $100.");
        }
        console.log(`Credited: $${amount}. New balance: $${this.balance}`);
    }

    getBalance(): number {
        return this.balance;
    }
    
}
export default(BankAccountImpl)