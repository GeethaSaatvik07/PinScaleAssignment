import { Component } from "react";

import {
  LastTransactionContainer,
  LastTransactionHeading,
  RecentTransactionsContainer,
} from "./styledComponents";

import TransactionListItem from "../TransactionListItem";

class DashboardLastTransactions extends Component {
  state = { lastTransactions: [] };

  componentDidMount() {
    this.getLastThreeTransactions();
  }

  getLastThreeTransactions = async () => {
    const apiUrl =
      "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=3&offset=0";
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
      const newLastTransactions = data.transactions.map((each) => ({
        id: each.id,
        transactionName: each.transaction_name,
        type: each.type,
        category: each.category,
        amount: each.amount,
        date: each.date,
        userId: each.user_id,
      }));
      //   console.log(newLastTransactions);
      this.setState({ lastTransactions: newLastTransactions });
    } else {
      console.log(data);
    }
  };

  render() {
    const { lastTransactions } = this.state;
    console.log(lastTransactions);
    return (
      <LastTransactionContainer>
        <LastTransactionHeading>Last Transaction</LastTransactionHeading>
        <RecentTransactionsContainer>
          {lastTransactions.map((eachTransaction) => (
            <TransactionListItem
              key={eachTransaction.id}
              transactionDetails={eachTransaction}
            />
          ))}
        </RecentTransactionsContainer>
      </LastTransactionContainer>
    );
  }
}

export default DashboardLastTransactions;
