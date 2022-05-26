import React, { useRef, useEffect } from "react";
import ChannelMessage from "../ChannelMessage";
import { Mention } from "../ChannelMessage/styles";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="roquiles"
          content="Isso é uma mensagem"
          date="26/05/2022"
        />
        <ChannelMessage
          author="roquiles"
          content="Isso é uma mensagem"
          date="26/05/2022"
        />
        <ChannelMessage
          author="roquiles"
          content="Isso é uma mensagem"
          date="26/05/2022"
        />
        <ChannelMessage
          author="roquiles"
          content="Isso é uma mensagem"
          date="26/05/2022"
        />
        <ChannelMessage
          author="roquiles"
          content="Isso é uma mensagem"
          date="26/05/2022"
        />
        <ChannelMessage
          author="roquiles"
          content="Isso é uma mensagem"
          date="26/05/2022"
        />
        <ChannelMessage
          author="roquiles"
          content="Isso é uma mensagem"
          date="26/05/2022"
        />
        <ChannelMessage
          author="roquiles"
          content="Isso é uma mensagem"
          date="26/05/2022"
        />
        <ChannelMessage
          author="roquiles"
          content="Isso é uma mensagem"
          date="26/05/2022"
        />
        <ChannelMessage
          author="roquiles"
          content="Isso é uma mensagem"
          date="26/05/2022"
        />
        <ChannelMessage
          author="roquiles"
          content="Isso é uma mensagem"
          date="26/05/2022"
        />
        <ChannelMessage
          author="César Costa"
          content={
            <>
              <Mention>@roquiles</Mention>, isso é uma mensagem do bot
            </>
          }
          date="26/05/2022"
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
