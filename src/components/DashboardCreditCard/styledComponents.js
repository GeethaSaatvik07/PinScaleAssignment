import styled from "styled-components";

export const CreditTile = styled.div`
  display: flex;
  width: 43.2%;
  //   height: 168px;
  height: 19vh;
  padding: 25px 36px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  margin-right: 12px;
  margin-bottom: 20px;
`;

export const CreditAndDebitTileMoneyAndName = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  width: 125px;
  height: 65px;
`;

export const CreditTileMoney = styled.p`
  color: #16dbaa;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CreditAndDebitTileName = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
