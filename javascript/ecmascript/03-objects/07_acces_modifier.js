// Private fields
// JavaScript does not have private fields, but you can use # to create private fields.

class Account {
    #balance = 0; // Private field

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new Account();
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // SyntaxError: Private field