import {
  DashboardPage,
  DashboardWithHeader,
  DashboardContainer,
  CreditAndDebitContainer,
} from "./styledComponents";

import DashboardDebitCard from "../DashboardDebitCard";
import DashboardCreditCard from "../DashboardCreditCard";
import Header from "../Header";
import SideNavbar from "../SideNavbar";
import DashboardLastTransactions from "../DashboardLastTransactions";

const Dashboard = () => (
  <DashboardPage>
    <SideNavbar />
    <DashboardWithHeader>
      <Header heading={"Accounts"} />
      <DashboardContainer>
        <CreditAndDebitContainer>
          <DashboardCreditCard />
          <DashboardDebitCard />
        </CreditAndDebitContainer>
        <DashboardLastTransactions />
      </DashboardContainer>
    </DashboardWithHeader>
  </DashboardPage>
);

export default Dashboard;
