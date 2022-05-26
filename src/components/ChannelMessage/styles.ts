import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;

  &.mention {
    background-color: var(--mention-message);

    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }

  & + div {
    margin-top: 13px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background-color: var(--secondary);

  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const Message = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 17px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  strong {
    color: var(--white);
  }

  span {
    margin-left: 6px;
    background-color: var(--discord);
    font-size: 9px;
    text-transform: uppercase;
    color: var(--white);
    padding: 2px 5px;
    font-weight: 700;
    border-radius: 4px;
  }

  time {
    color: var(--gray);
    font-size: 13px;
    margin-left: 6px;
  }
`;

export const Content = styled.div`
  text-align: left;
  color: var(--white);
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
