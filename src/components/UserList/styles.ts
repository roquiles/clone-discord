import styled from "styled-components";

export const Container = styled.div`
  grid-area: UL;
  background-color: var(--quaternary);
  padding: 3px 6px 0 16px;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const UserStatus = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);

  margin-top: 20px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  strong {
    font-weight: normal;
    margin-left: 8px;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  span {
    margin-left: 9px;
    background-color: var(--discord);
    font-size: 9px;
    text-transform: uppercase;
    color: var(--white);
    padding: 2px 5px;
    font-weight: 700;
    border-radius: 4px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--primary);

  &.bot {
    background-color: var(--mention-detail);
  }
`;
