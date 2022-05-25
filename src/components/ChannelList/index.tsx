import React from "react";
import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>CANAIS DE TEXTO</span>
        <AddCategoryIcon></AddCategoryIcon>
      </Category>

      <ChannelButton name="chat-livre" />
      <ChannelButton name="trabalho" />
      <ChannelButton name="lolzinho" />
      <ChannelButton name="valorant" />
      <ChannelButton name="csgo" />
    </Container>
  );
};

export default ChannelList;
