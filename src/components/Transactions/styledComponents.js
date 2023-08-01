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

// export const TotalTransactionsList = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   height: 100%;
//   width: 100%;
//   border-radius: 25px;
//   padding: 5px;
//   background: #fff;
//   overflow-x: hidden;
//   overflow-y: scroll;
//   gap: 16px;
// `;

// export const TransactionItemHeadings = styled.div`
//   width: 100%;
//   height: 100%;
//   padding: 5px;
//   padding-top: 15px;
//   padding-bottom: 15px;
//   display: flex;
//   align-items: center;
//   border-bottom: 1px solid #e2e2e2;
//   margin-left: 15px;
// `;

// export const TransactionNameHeading = styled.p`
//   color: #343c6a;
//   font-family: Inter;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
//   width: 30%;
// `;

// export const CategoryDateAmountHeadings = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 60%;
// `;

// export const TransactionCategoryHeading = styled(TransactionNameHeading)`
//   //   color: #718ebf;
//   //   font-family: Inter;
//   //   font-size: 16px;
//   //   font-style: normal;
//   //   font-weight: 400;
//   //   line-height: normal;
//   //   //   margin-right: 90px;
//   width: 80px;
// `;

// export const TransactionDateHeading = styled(TransactionNameHeading)`
//   //   color: #718ebf;
//   //   font-family: Inter;
//   //   font-size: 16px;
//   //   font-style: normal;
//   //   font-weight: 400;
//   //   line-height: normal;
//   //   //   margin-right: 90px;
//   width: 150px;
// `;

// export const TransactionAmountHeading = styled(TransactionNameHeading)`
//   //   color: #343c6a;
//   //   font-family: Inter;
//   //   font-size: 16px;
//   //   font-style: normal;
//   //   font-weight: 500;
//   //   line-height: normal;
//   text-align: right;
//   width: 80px;
// `;
