import { Component } from "react";

import {
  TransactionsPage,
  HeaderAndFilter,
  FilterCreditDebit,
  TransactionsWithHeader,
  TransactionsContainer,
  TotalTransactionsList,
} from "./styledComponents";

import Header from "../Header";
import SideNavbar from "../SideNavbar";
import TransactionFilters from "../TransactionFilters";
import TransactionListItem from "../TransactionListItem";

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

class Transactions extends Component {
  state = { filterId: transactionFiltersList[0].id, allTransactionsList: [] };

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions = async () => {
    // const { filterId } = this.state;
    const apiUrl = `https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=500&offset=0`;
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": "1",
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

  onClickChangeFilter = (id) => {
    this.setState({ filterId: id });
  };

  render() {
    const { filterId, allTransactionsList } = this.state;
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
      <TransactionsPage>
        <SideNavbar />
        <TransactionsWithHeader>
          <HeaderAndFilter>
            <Header heading={"Transactions"} />
            <FilterCreditDebit>
              {transactionFiltersList.map((eachFilter) => (
                <TransactionFilters
                  key={eachFilter.id}
                  filterDetails={eachFilter}
                  filterId={filterId}
                  onClickChangeFilter={this.onClickChangeFilter}
                />
              ))}
            </FilterCreditDebit>
          </HeaderAndFilter>
          <TransactionsContainer>
            <TotalTransactionsList>
              {filteredTransactionsList.map((eachTransaction) => (
                <TransactionListItem
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                />
              ))}
            </TotalTransactionsList>
          </TransactionsContainer>
        </TransactionsWithHeader>
      </TransactionsPage>
    );
  }
}

export default Transactions;
