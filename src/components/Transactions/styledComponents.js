import styled from "styled-components";

export const TransactionsPage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TransactionsWithHeader = styled.div`
  width: 82.64%;
  //   width: 80.5%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderAndFilter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterCreditDebit = styled.div`
  margin-left: 40px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
`;

export const TransactionsContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f7fa;
  padding: 15px;
  padding-bottom: 30px;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  ::-ms-scrollbar {
    display: none;
  }
`;

export const TotalTransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  padding: 5px;
  background: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
  gap: 16px;
`;
