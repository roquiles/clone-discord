import styled from "styled-components";

import { ServerButtonProps } from ".";

export const Button = styled.button<ServerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;

  height: 48px;
  width: 48px;

  margin-bottom: 8px;
  border-radius: 50%;

  transition: border-radius 0.2s, background-color 0.2s;

  background-color: ${(props) =>
    props.isHome ? "var(--rocketseat)" : "var(--primary)"};

  cursor: pointer;

  & > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    content: "";
    height: 9px;
    width: 9px;
    border-radius: 50%;
    position: absolute;
    left: -17px;
    background: var(--white);

    display: ${(props) => (props.hasNotifications ? "inline" : "none")};
  }

  &::after {
    content: "${(props) => (props.mentions ? props.mentions : "")}";

    width: auto;
    height: 16px;
    background-color: var(--notification);
    border-radius: 50%;
    padding: 0 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border: 4px solid var(--tertiary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    display: ${(props) => (props.mentions ? "inline" : "none")};
  }

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? "var(--rocketseat)" : "var(--discord)"};
  }
`;
