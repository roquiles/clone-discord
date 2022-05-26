import React from "react";

import { Container, User, Avatar, UserStatus } from "./styles";

interface UserRowProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserRowProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <UserStatus>Disponível - 1</UserStatus>
      <UserRow nickname="roquiles" />
      <UserStatus>Offline - 7</UserStatus>
      <UserRow nickname="César Costa" isBot />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
      <UserRow nickname="Golias" />
    </Container>
  );
};

export default UserList;
