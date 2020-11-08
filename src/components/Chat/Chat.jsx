import styled from 'styled-components';

// === material-ui ===
import { Tab, TextField, Button, Typography, Avatar } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

// === utils ===
import { useState } from 'react';

const Chat = ({ chatMessages, addMessage }) => {
  const initialPanes = [
    { title: 'Общий чат', key: '1' },
    { title: 'Логово мафии', key: '2' },
  ];

  const [messageValue, changeMessage] = useState('');

  const onChangeMessage = event => {
    const text = event.target.value;
    changeMessage(text);
  };

  const sendMessage = () => {
    addMessage(messageValue);
    changeMessage('');
  };

  const pressEnter = event => {
    if (event.shiftKey && event.key === 'Enter') return;
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <ChatWrapper>
      <Tab type="editable-card">
        {initialPanes.map(({ title, key, closable, content }) => (
          <TabPanel tab={title} key={key} closable={closable}>
            {content}
          </TabPanel>
        ))}
      </Tab>

      <ChatMessagesComponent {...{ chatMessages }} />

      <ChatMoves>
        <Typography type="secondary">Дадим мафии договориться</Typography>
        <Typography type="secondary">
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
        <Button type="primary" size="large" onClick={sendMessage}>
          Отправить
        </Button>
      </ChatForm>
    </ChatWrapper>
  );
};

const ChatMessagesComponent = ({ chatMessages }) => {
  return (
    <ChatMessages>
      {chatMessages.map(user => (
        <ChatItem key={user.id}>
          {user.avatar ? (
            <Avatar shape="square" src={user.avatar} />
          ) : (
            <Avatar shape="square" icon={<PermIdentityOutlinedIcon />} />
          )}
          <ChatItemMessage>
            <Typography type="secondary">{user.name}</Typography>
            <Typography type="primary">{user.text}</Typography>
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
