const util = require('util');
const Elliptic = require('elliptic').ec, Secp256ak1 = new Elliptic('secp256k1');
const Block = require("./Block.js");
const Blockchain = require("./Blockchain.js");
const Transaction = require("./transaction.js");

let block = new Block (null, null)
console.log(block.mine());
console.log(block);
// console.log(block.isValid());

console.log("----");

const myPrivateWallet = Secp256ak1.genKeyPair();
const myPublicWallet = myPrivateWallet.getPublic('hex');
const jeanMiPublicWallet = Secp256ak1.genKeyPair().getPublic('hex');

// console.log(myPrivateWallet);
// console.log(myPublicWallet);

const coincoin = new Blockchain();
// let transaction = new Transaction (myPublicWallet, jeanMiPublicWallet,42);
// let block2 = new Block(coincoin.getLastBlock().hash, [transaction]);

// block2.mine();
// coincoin.addBlock(block2);
// const coincoin = new Blockchain();
const Transaction1 = new Transaction('sell my car',jeanMiPublicWallet, myPublicWallet, 200)
coincoin.mine(jeanMiPublicWallet);

coincoin.addTransaction(Transaction1);

const Trnansaction2 = new Transaction( "buy a Phone", myPublicWallet, jeanMiPublicWallet, 150)
coincoin.mine(myPublicWallet);
coincoin.addTransaction(Trnansaction2);

console.log(util.inspect(coincoin,false,null, true));
console.log(coincoin.getBalanceOfAddress(jeanMiPublicWallet));