import styled from "styled-components";

export const Sidebar = styled.div`
  width: 17.36%;
  height: 100%;
  border-right: 1px solid #e2e2e2;
  background: #fff;
  flex-shrink: 0;
  display flex;
  flex-direction: column;
  align-items: center;
`;

export const NameAndLogo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 11px;
`;

export const CompanyName = styled.p`
  color: #f89a23;
  font-family: Poppins;
  font-size: 19.66px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const CompanyNameMatters = styled.span`
  color: #02969c;
`;
