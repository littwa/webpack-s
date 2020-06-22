import Transaction from './Transaction.js';
// console.log(Transaction);
export default class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  // Текущий баланс счета

  // История транзакций

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return { amount: amount, type: type, id: this.transactions.length + 1 };
  }

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    let tr = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(tr);
    this.balance += amount;
  }

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance >= amount) {
      let tr = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(tr);
      this.balance -= amount;
    } else {
      console.log('no many');
    }
  }

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  }

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions.find(el => el.id === id);
  }

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    return this.transactions
      .filter(el => el.type === type)
      .reduce((acc, ell) => {
        return (acc += ell.amount);
      }, 0);
  }
}
