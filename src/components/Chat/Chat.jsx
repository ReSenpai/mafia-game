import styled from 'styled-components';

// === antd ===
import { Tab, Input, Button, Typography, Avatar } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

// === utils ===
import { colors } from '../../utils/variables';
import { useState } from 'react';

const Chat = ({ chatMessages, addMessage }) => {
  const initialPanes = [
    { title: 'Общий чат', key: '1' },
    { title: 'Логово мафии', key: '2' },
  ];

  const [messageValue, changeMessage] = useState('');

  const onChangeMessage = event => {
    const text = event.target.value;
    console.log(text);
    changeMessage(text);
  };

  const sendMessage = () => {
    addMessage(messageValue);
    changeMessage('');
  };

  const pressEnter = (event) => {
    if (event.shiftKey && event.key === 'Enter') return;
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <ChatWrapper>
      <Tab type="editable-card">
        {initialPanes.map(pane => (
          <TabPanel tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
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
        <Input
          placeholder="Введите сообщение"
          size="large"
          suffix={<EmojiEmotionsOutlinedIcon />}
          value={messageValue}
          onChange={onChangeMessage}
          onKeyPress={ pressEnter }
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
                <ThumbUpOutlinedIcon /> {user.likes} <ThumbDownOutlinedIcon />{' '}
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

const { white, black } = colors;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  /* background-color: ${white}; */
  /* color: ${black}; */
  padding: 0 20px;
  height: 80vh;
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
    transform: scale(1.2);

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
