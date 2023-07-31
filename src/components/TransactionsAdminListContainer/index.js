import { Component } from "react";
import Cookies from "js-cookie";
import {
  //   TransactionsPage,
  //   HeaderAndFilter,
  //   FilterCreditDebit,
  //   TransactionsWithHeader,
  //   TransactionsContainer,
  TotalTransactionsList,
  TransactionItemHeadings,
  TransactionUsernameHeadings,
  NameCategoryDateAmountHeadings,
  TransactionNameHeading,
  TransactionCategoryHeading,
  TransactionDateHeading,
  TransactionAmountHeading,
} from "./styledComponents";

import TransactionAdminListItem from "../TransactionAdminListItem";

const transactionFiltersList = [
  {
    id: 0,
    displayName: "All Transactions",
    filter: "",
  },
  {
    id: 1,
    displayName: "Credit",
    filter: "credit",
  },
  {
    id: 2,
    displayName: "Debit",
    filter: "debit",
  },
];

class TransactionsAdminListContainer extends Component {
  state = { allTransactionsList: [] };

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions = async () => {
    const userId = Cookies.get("user_id");
    const apiUrl = `https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=500&offset=0`;
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": userId,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    // console.log(data.transactions);
    if (response.ok) {
      const newTransactions = data.transactions.map((each) => ({
        id: each.id,
        transactionName: each.transaction_name,
        type: each.type,
        category: each.category,
        amount: each.amount,
        date: each.date,
        userId: each.user_id,
      }));
      //   console.log(newLastTransactions);
      this.setState({ allTransactionsList: newTransactions });
    } else {
      console.log(data);
    }
  };

  render() {
    const { filterId } = this.props;
    const { allTransactionsList } = this.state;
    console.log(filterId, allTransactionsList);
    let filteredTransactionsList = null;
    if (filterId > 0) {
      filteredTransactionsList = allTransactionsList.filter(
        (eachTransaction) =>
          eachTransaction.type === transactionFiltersList[filterId].filter
      );
    } else {
      filteredTransactionsList = allTransactionsList;
    }
    return (
      <TotalTransactionsList>
        <TransactionItemHeadings>
          <TransactionUsernameHeadings>User Name</TransactionUsernameHeadings>
          <NameCategoryDateAmountHeadings>
            <TransactionNameHeading>Transaction Name</TransactionNameHeading>
            <TransactionCategoryHeading>Category</TransactionCategoryHeading>
            <TransactionDateHeading>Date</TransactionDateHeading>
            <TransactionAmountHeading>Amount</TransactionAmountHeading>
          </NameCategoryDateAmountHeadings>
        </TransactionItemHeadings>
        {filteredTransactionsList.map((eachTransaction) => (
          <TransactionAdminListItem
            key={eachTransaction.id}
            transactionDetails={eachTransaction}
          />
        ))}
      </TotalTransactionsList>
    );
  }
}

export default TransactionsAdminListContainer;
