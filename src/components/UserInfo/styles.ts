import styled from "styled-components";

export const Container = styled.div`
  grid-area: UI;
  background-color: var(--quaternary);
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
  position: relative;

  &::after {
    content: "-";
    font-weight: bold;
    height: 10px;
    width: 10px;
    position: absolute;
    font-weight: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    right: 0;
    bottom: 0;
    background-color: var(--notification);
    border-radius: 50%;
  }
`;

export const UserData = styled.div`
  font-size: 13px;
  margin-left: 8px;
  flex: 1;

  display: flex;
  flex-direction: column;

  strong {
    display: block;
    color: var(--white);
  }

  span {
    color: var(--gray);
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    color: var(--white);
    opacity: 0.7;
    height: 20px;

    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    & + svg {
      margin-left: 7px;
    }
  }
`;
