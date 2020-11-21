import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';

// === material-ui ===
import { TextField, Button, Typography, Avatar } from '@material-ui/core';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

// === types ===
import { IChatMessage } from 'src/types';

interface ChatProps {
  chatMessages: IChatMessage[];
  addMessage: any;
}

const Chat: React.FC<ChatProps> = ({ chatMessages, addMessage }) => {
  const [messageValue, changeMessage] = useState('');

  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    changeMessage(text);
  };

  const sendMessage = () => {
    addMessage(messageValue);
    changeMessage('');
  };

  const pressEnter = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.shiftKey && event.key === 'Enter') return;
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <ChatWrapper>
      <ChatMessagesComponent chatMessages={chatMessages} />

      <ChatMoves>
        <Typography color="secondary">Дадим мафии договориться</Typography>
        <Typography color="secondary">
          Следующий ход через: 2 мин 40 сек
        </Typography>
      </ChatMoves>

      <ChatForm>
        <TextField
          fullWidth
          variant="filled"
          label="Введите сообщение"
          size="small"
          value={messageValue}
          onChange={onChangeMessage}
          onKeyPress={pressEnter}
        />
        <Button size="large" onClick={sendMessage}>
          Отправить
        </Button>
      </ChatForm>
    </ChatWrapper>
  );
};

interface IChatMessagesComponent {
  chatMessages: Array<IChatMessage>;
}

const ChatMessagesComponent: React.FC<IChatMessagesComponent> = ({
  chatMessages,
}) => {
  return (
    <ChatMessages>
      {chatMessages.map(user => (
        <ChatItem key={user.id}>
          {user.avatar ? (
            <Avatar variant="square" src={user.avatar} />
          ) : (
            <Avatar variant="square">
              <PermIdentityOutlinedIcon />
            </Avatar>
          )}
          <ChatItemMessage>
            <Typography color="secondary">{user.name}</Typography>
            <Typography color="primary">{user.text}</Typography>
            <ChatItemMessageInfo>
              <ChatItemMessageCtrl>
                <ThumbUpOutlinedIcon /> {user.likes} <ThumbDownOutlinedIcon />
                {user.dislikes}
              </ChatItemMessageCtrl>
              <ChatItemMessageDate>{user.messageTime}</ChatItemMessageDate>
            </ChatItemMessageInfo>
          </ChatItemMessage>
        </ChatItem>
      ))}
    </ChatMessages>
  );
};

export default Chat;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  flex-grow: 1;
`;

const ChatForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  overflow-y: scroll;
`;

const ChatItem = styled.div`
  display: flex;
  gap: 1em;
`;

const ChatItemMessage = styled.div`
  width: 100%;
  * {
    display: block;
  }
`;

const ChatItemMessageInfo = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
`;

const ChatItemMessageCtrl = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  svg {
    cursor: pointer;

    &:hover {
      fill: blue;
    }
  }
`;

const ChatItemMessageDate = styled.div``;

const ChatMoves = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1em;
  font-style: italic;
`;
