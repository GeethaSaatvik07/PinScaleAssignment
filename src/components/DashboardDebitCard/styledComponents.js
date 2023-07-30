import styled from "styled-components";
export const DebitTile = styled.div`
  display: flex;
  width: 43.2%;
  //   height: 169px;
  height: 19vh;
  padding: 25px 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  margin-bottom: 20px;
`;

export const DebitTileMoney = styled.p`
  color: #fe5c73;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CreditAndDebitTileMoneyAndName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 7px;
  width: 88px;
  height: 56px;
`;

export const CreditAndDebitTileName = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
