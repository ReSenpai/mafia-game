import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

// === material-ui ===
import {
  TextField,
  Button,
  Typography,
  Avatar,
  styled,
} from '@material-ui/core';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import SendSharp from '@material-ui/icons/SendSharp';

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
          <SendSharp />
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
            <Typography color="textSecondary">{user.name}</Typography>
            <Typography color="textPrimary">{user.text}</Typography>
            <ChatItemMessageInfo>
              <div>{user.messageTime}</div>
            </ChatItemMessageInfo>
          </ChatItemMessage>
        </ChatItem>
      ))}
    </ChatMessages>
  );
};

export default Chat;

const ChatWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '80vh',
  flexGrow: 1,
});

const ChatForm = styled('form')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1em',
});

const ChatMessages = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '2em',
  overflowY: 'scroll',
});

const ChatItem = styled('div')({
  display: 'flex',
  gap: '1em',
});

const ChatItemMessage = styled('div')({
  width: '100%',

  '*': {
    display: 'block',
  },
});

const ChatItemMessageInfo = styled('div')({
  marginTop: '1em',
  display: 'flex',
  justifyContent: 'space-between',
});

const ChatMoves = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  margin: '1em',
  fontStyle: 'italic',
});
