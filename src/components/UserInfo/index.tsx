import React from "react";
import { Mic, Headset, Settings } from "styled-icons/material";

import { Container, Profile, Avatar, UserData, Icons } from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>roquiles</strong>
          <span>&#35;4506</span>
        </UserData>
      </Profile>

      <Icons>
        <Mic />
        <Headset />
        <Settings />
      </Icons>
    </Container>
  );
};

export default UserInfo;
