import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const HashtagIcon = styled(Hashtag)`
  height: 24px;
  width: 24px;

  color: var(--symbol);
`;

export const Title = styled.h1`
  font-size: 16px;
  color: var(--white);
  margin-left: 9px;
`;

export const Separator = styled.div`
  width: 1px;
  height: 24px;
  background-color: var(--white);
  margin: 0 13px;

  opacity: 0.2;
`;

export const Description = styled.span`
  color: var(--gray);
  opacity: 0.8;
  font-size: 15px;
`;
