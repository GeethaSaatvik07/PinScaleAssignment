import { Component } from "react";
import Cookies from "js-cookie";
import {
  OverviewHeadingAndContainer,
  OverviewHeading,
  OverviewContainer,
} from "./styledComponents";

class DashboardLastSevenDaysOverview extends Component {
  state = { lastTransactions: [] };

  componentDidMount() {
    this.getLastSevenDaysOverview();
  }

  getLastSevenDaysOverview = async () => {
    const userId = Cookies.get("user_id");
    const isUserAdmin = userId === "3";
    const apiUrl = isUserAdmin
      ? "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin"
      : "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days";
    const options = isUserAdmin
      ? {
          headers: {
            "content-type": "application/json",
            "x-hasura-admin-secret":
              "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
            "x-hasura-role": "admin",
          },
          method: "GET",
        }
      : {
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
    console.log(data);
  };

  render() {
    return (
      <OverviewHeadingAndContainer>
        <OverviewHeading>Debit & Credit Overview</OverviewHeading>
        <OverviewContainer>HI</OverviewContainer>
      </OverviewHeadingAndContainer>
    );
  }
}

export default DashboardLastSevenDaysOverview;
