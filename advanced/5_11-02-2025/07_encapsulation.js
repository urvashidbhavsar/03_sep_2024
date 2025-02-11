class BankDetails {
    constructor(acc_no, holdername, balance) {
        this.acc_no = acc_no
        this.holdername = holdername
        this.balance = balance
    }

    printBankData() {
        console.log("Account No => " + this.acc_no);
        console.log("Holder name => " + this.holdername);
        console.log("Balance  => " + this.balance);
    }
    deposit(amount) {
        this.balance += amount;
        this.printBankData();
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.printBankData();
        } else {
            console.log("Insufficient Balance");
        }
    }
}
let b1 = new BankDetails(20, "Hitesh", 20000)
b1.deposit(1000)
b1.withdraw(5000)
// b1.printBankData()