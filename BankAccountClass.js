class BankAccountImpl {
    balance = 0;
    customer;
    constructor(customer) {
        this.customer = customer;
    }
    debit(amount) {
        if (this.balance < amount) {
            console.log("Transaction canceled: Insufficient balance.");
        }
        else {
            this.balance -= amount;
            console.log(`Debited: $${amount}. New balance: $${this.balance}`);
        }
    }
    credit(amount) {
        this.balance += amount;
        if (amount > 100) {
            this.balance -= 1; // Deduct $1 if credit amount is more than $100
            console.log("A $1 fee has been deducted for crediting more than $100.");
        }
        console.log(`Credited: $${amount}. New balance: $${this.balance}`);
    }
    getBalance() {
        return this.balance;
    }
}
export default (BankAccountImpl);
