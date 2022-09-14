class Customer {
    constructor(id, fullName, email, phone, address, balance, deleted){
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this. balance = balance;
        this.deleted = deleted;
    }
}
class Deposit {
    constructor(id, customerId, transactionAmount, deleted = 0) {
        this.id = id;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
        this.deleted = deleted;
    }
}

class Withdraw {
    constructor(id, customerId, transactionAmount,deleted = 0) {
        this.id = id;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
        this.deleted = deleted;
    }
}


class Sender extends Customer {
    constructor() {
        super();
    }
}

class Recipient extends Customer {
    constructor() {
        super();
    }
}

class Transfer{
    constructor(id,deleted = 0,fees = 10,feesAmount,transactionAmount,transferAmount,recipientId,senderId){
        this.id = id;
        this.deleted = deleted;
        this.fees = fees;
        this.feesAmount = feesAmount;
        this.transactionAmount = transactionAmount;
        this.transferAmount = transferAmount;
        this.recipientId = recipientId;
        this.senderId = senderId;
    }
}