const Account = require("./Account");

class BusinessAccount extends Account {
    constructor(name, balance, creditLimit, sepaPermission) {
        super(name, balance, creditLimit);
        this.sepaPermission = sepaPermission;
        this.withdrawLimit = 20000;
    }

    makeWithdrawal(amount) {
        if (amount > this.balance || amount > (this.creditLimit + this.balance) || amount > this.withdrawLimit) {
            return `You're exceeding limits. Balance: ${this.balance}`;
        } else {
            return `New balance: ${(this.balance -= amount)}`;
        }
    }

    sepaInvoice(amount) {
        if (this.sepaPermission) {
            if (amount < 0) {
                return `Uhm, that's a negative. Balance: ${this.balance}`;
            } else {
                this.balance += (amount * 0.99)
                return `New balance: ${this.balance}`;
            }
        }
        return `You don't have permission. Balance: ${this.balance}`;
    }
}

const company = new BusinessAccount(); //extra, for testing

module.exports = BusinessAccount;