export const collection = [
  {
    id: 'RwV8CABWbiND97f84sPK',
    date: '02.01.2024, 11:25:10',
    type: 'expense',
    category: null,
    from: null,
    owner: 'cwHREHrGpIZk8HGQcZwPARk12LL2',
    amount: 10000,
  },
  {
    id: 'RSbzashAK3iA45LadEN4',
    date: '03.12.2023, 11:25:10',
    category: null,
    owner: 'cwHREHrGpIZk8HGQcZwPARk12LL2',
    from: null,
    type: 'cheepy',
    amount: 900,
  },
  {
    id: 'fj2nPiBuBCqUaX6D0kPO',
    date: '10.01.2024, 11:25:10',
    owner: 'cwHREHrGpIZk8HGQcZwPARk12LL2',
    type: 'income',
    to: null,
    amount: 500,
  },
  {
    id: 'xPUdDSn5EUtMsRBTBnOG',
    from: null,
    owner: 'cwHREHrGpIZk8HGQcZwPARk12LL2',
    date: '28.12.2023, 14:38:43',
    type: 'cheepy',
    amount: 5000,
    category: 'salary',
  },
];

export const options = {
  headers: [
    { name: 'date', title: 'Date', sort: false },
    { name: 'type', title: 'Type', sort: false },
    {
      name: 'amount',
      title: 'Amount',
      sortBy: true,
      sort: (a, b) => Number(b.amount) - Number(a.amount),
    },
  ],
  deletable: true,
  onDelete: async (id) => {
    if (confirm('Are you sure you want to delete this transaction?')) {
      await deleteTransaction(id);
      const transactions = await this.pullAllTransaction();
      this.transactionsTable.updateTable(transactions);
      const wallets = await getWallets();
      this.walletsTable.updateTable(wallets);
      const totalBalance = wallets.reduce(
        (acc, currWallet) => (acc += +currWallet.balance),
        0
      );
      this.totalBalance.textContent = `${this.currency}${totalBalance}`;
    } else return null;
  },
};
