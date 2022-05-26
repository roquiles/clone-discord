import React from "react";

import { Container, Avatar, Message, Header, Content } from "./styles";

export interface ChannelMessageProps {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMentions?: boolean;
  isBot?: boolean;
}

const ChannelMessage: React.FC<ChannelMessageProps> = ({
  isBot,
  author,
  date,
  content,
  hasMentions,
}) => {
  return (
    <Container className={hasMentions ? "mentions" : ""}>
      <Avatar className={isBot ? "bot" : ""} />

      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;
