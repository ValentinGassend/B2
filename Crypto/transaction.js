const Blockchain = require("./Blockchain.js");

class transaction {

    constructor(label, from, to, amount, smartContract = null) {
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.smartContract = smartContract;
        this.label = label;
    }

    isValid(blockchain) {
        if (this.from === this.to) {
            throw Error("You can't send coin to yourself");
        }
        if (!this.from || !this.from) {
            throw Error("The transaction has an empty field");
        }
        if (this.amount < 0) {
            throw Error("The transaction amount can't be negative")
        }
        if (this.from !== blockchain.mintPublicAddress) {
            if (blockchain.getBalanceOfAddress(this.from) < this.amount) {
                throw Error("The sender has not enought Coincoin")
            }
        }
        return true;
    }

}
module.exports = transaction;