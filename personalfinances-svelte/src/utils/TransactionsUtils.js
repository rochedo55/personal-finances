import { formatDateToHuman, compareTwoDateHuman } from './Dateutils';

export const groupTransactionsByDate = function(transactions) {
    let lookupTransactions = {};

    transactions.forEach((transaction) => {
        let formatedDate = formatDateToHuman(transaction.date);

        if (lookupTransactions.hasOwnProperty(formatedDate)) {
            lookupTransactions[formatedDate] += transaction.value;
        } else {
            lookupTransactions[formatedDate] = transaction.value;
        }
    });

    return Object.keys(lookupTransactions).sort(compareTwoDateHuman).map((key) => [key, lookupTransactions[key]]);
}