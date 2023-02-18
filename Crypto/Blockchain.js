const Block = require("./Block.js");
const Transaction = require("./transaction.js");
const Elliptic = require('elliptic').ec, Secp256ak1 = new Elliptic('secp256k1');


class Blockchain {

    static get REWARD() {
        return 250;
    }

    static get MINT_PUBLIC_ADDRESS() {
        return Secp256ak1.genKeyPair().getPublic('hex');
    }

    constructor() {
        this.mintPublicAddress = Secp256ak1.genKeyPair().getPublic('hex');
        const genesisBlock=new Block(null);
        genesisBlock.mine();
        this.chain = [genesisBlock];
        this.memPool = [];
    }

    mine(rewardAddress) {
        const rewardTransaction = new Transaction('reward', this.mintPublicAddress, rewardAddress, Blockchain.REWARD);
        const block = new Block(this.getLastBlock().hash, [...this.memPool, rewardTransaction]);
        block.mine()
        this.addBlock(block);
        this.memPool = [];
    }

    /**
     *  @param {Transaction} transaction
     */
    addTransaction (transaction) {
        if (!transaction.isValid(this)) {
            throw new Error("Invalid Transaction")
        }

        this.memPool.push(transaction);
    }


    /**
     *  @param {block} block
     */
    addBlock(block) {
        if (!block.isValid()) {
            throw new Error("The Block is not valid");
        }

        if (this.getLastBlock().hash !== block.previousHash) {
            throw new Error("The previous hash is not valid");

        }
        this.chain.push(block);
    }

    getLastBlock() {
        // this.chain[this.chain.length - 1];
        return this.chain[this.chain.length - 1];

    }

    getBalanceOfAddress ( address, untilThisBlock = this.getLastBlock() ) {
        let balance =0;

        for (let i=0; i < this.chain.length; i++) {

            const _block = this.chain[i];
            for (let j=0; j < _block.data.length; j++) {
                const _transaction = _block.data[j];

                if( _transaction.from===address) {
                    balance -= _transaction.amount;
                }
                if( _transaction.to===address) {
                    balance += _transaction.amount;

                }
            }
            if (_block.hash === untilThisBlock.hash) {
                return balance;
            }

        }

    }
}

module.exports = Blockchain;