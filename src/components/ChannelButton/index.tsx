import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

interface ChannelButtonProps {
  name: string;
  selected?: boolean;
}

const ChannelButton: React.FC<ChannelButtonProps> = ({ name, selected }) => {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashtagIcon />
        <span>{name}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
