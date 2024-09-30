


const Person = require('./person/person.js');
const Ledger = require('./Bank/ledger.js');


const admin=Person.createAdmin('Aneesh', 'Kumar', 40, true)
const user1 =  Person.newPersonToOpenAccount('vineet', 'sharma', 30);
const user2 =  Person.newPersonToOpenAccount('akash', 'parmar', 25);


const bank1 = admin.addBank('State Bank of India', 'SBI');
const bank2 = admin.addBank('Punjab National Bank', 'PNB');


const account1 = user1.createAccount('Savings', bank1);
const account2 = user2.createAccount('Checking', bank2);


user1.depositToAccount(account1.accountId, 5000);
user2.depositToAccount(account2.accountId,6000)
user2.withdrawFromAccount(account2.accountId, 1000);

user1.viewAllBalance();
user2.viewAllBalance();

user1.transferToOwnAccount(account1.accountId, account2, 500);


user1.transferBetweenBanks(bank1, bank2, 2000, account1.accountId, account2.accountId);


Ledger.printTransactions()


admin.deleteBank(bank1);


account1.printPassbook();
