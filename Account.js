class Account {
    constructor(name, balance, creditLimit) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
    }

    makeDeposit(amount) {
        if (amount < 0) {
            return `Uhm, that's impossible. Balance: ${this.balance}`;
        } else {
            return `Your new balance is ${(this.balance += amount)}`;
        }
    }

    makeWithdrawal(amount) {
        if (amount > this.balance) {
            return `Insufficient funds! Balance: ${this.balance}`;
        } else if (amount > 5000) {
            return `That's above the daily limit. Balance is: ${this.balance}`;
        } else {
           return `New balance: ${(this.balance -= amount)}`;
        }
    }

}

const accountHolder = new Account('Rein', 500, 2000);

console.log(`hi my name is ${accountHolder.name}, today I have a balance of ${accountHolder.balance} and a credit limit of ${accountHolder.creditLimit}`)
console.log(accountHolder.makeDeposit(1000));


module.exports = Account;