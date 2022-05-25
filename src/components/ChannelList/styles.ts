import styled from "styled-components";
import { Add } from "styled-icons/material";

export const Container = styled.div`
  grid-area: CL;

  background-color: var(--secondary);
  display: flex;
  flex-direction: column;

  padding: 24px 8px 16px;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 6px;

  span {
    color: var(--gray);
    font-size: 12px;
    font-weight: 500;
  }
`;

export const AddCategoryIcon = styled(Add)`
  height: 21px;
  width: 21px;
  color: var(--gray);

  cursor: pointer;
`;
