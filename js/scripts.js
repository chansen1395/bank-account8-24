// Business Logic for Ticket ---------

function BankAccount(name, initialDep, deposit, balance) {
  this.name = name;
  this.initialDep = initialDep;
  this.deposit = deposit;
  this.balance = balance;
}
BankAccount.prototype.getName = function() {
  var name = this.name;
  return name;
}

BankAccount.prototype.getInitial = function() {
  this.balance += this.initialDep;
  return this.balance;
}

BankAccount.prototype.getDepositWithdrawl = function() {
  this.balance += this.deposit;
    return this.balance;
}

BankAccount.prototype.getBalance = function() {
    return this.balance;
}




var newAccount = new BankAccount("abc", 1, -2, 0);

console.log(newAccount.getInitial());
console.log(newAccount.getName());
console.log(newAccount.getDepositWithdrawl());
console.log(newAccount.getBalance());
