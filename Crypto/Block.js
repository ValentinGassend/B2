const crypto = require("crypto");

const SHA256 = (data) => crypto.createHash("sha256").update(data).digest("hex");

class Block {

    static get difficulty() {
        return 3;
    }

    /**
     *  @param {String} previousHash
     *  @param {Array<transaction>} data
     */
    constructor(previousHash, data = []) {
    this.timestramp = Date.now().toString();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = null;
    this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.previousHash + this.timestramp + JSON.stringify(this.data) + this.nonce);
    }

    #mineOnce() {
        this.hash = this.calculateHash()
        if (this.hash.substring(0, Block.difficulty) !== "0".repeat(Block.difficulty)) {
            this.nonce++;
            return false;
        }
        return true
    }
    mine() {
        const  startDate = new Date();
        while (!this.#mineOnce()) {
            this.#mineOnce();
        }


        return (new Date().getTime() - startDate.getTime()) /1000;
    }


    isValid() {
        if (this.hash.substring(0, Block.difficulty) !== "0".repeat(Block.difficulty)) {
            throw new Error("Wrong block hash");
        }
        if (!this.previousHash) {
            throw new Error("No previous hash provided");
        }

        return true;
    }

}

module.exports = Block;