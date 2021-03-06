import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 15px;
      color: var(--senary);
      margin-left: 9px;
    }
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    div span {
      color: var(--white);
    }

    div:last-child {
      display: inline;
    }
  }

  div:last-child {
    display: none;
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  color: var(--symbol);

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  color: var(--symbol);
  margin-left: 5px;

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
