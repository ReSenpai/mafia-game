import styled from 'styled-components';

// === antd ===
import { Tabs, Input, Button, Typography, Avatar } from 'antd';
import {
  UserOutlined,
  LikeOutlined,
  DislikeOutlined,
  SmileTwoTone,
} from '@ant-design/icons';

const { TabPane } = Tabs;
const { Text } = Typography;

// === utils ===
import { colors } from '../../utils/variables';

const Chat = () => {
  const initialPanes = [
    { title: 'Общий чат', key: '1' },
    { title: 'Логово мафии', key: '2' },
  ];

  return (
    <ChatWrapper>
      <Tabs type="editable-card">
        {initialPanes.map(pane => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>

      <ChatMessages>
        <ChatItem>
          <Avatar shape="square" icon={<UserOutlined />} />
          <ChatItemMessage>
            <Text type="secondary">Name</Text>
            <Text type="primary">
              Design principles, practical patterns and high quality design
              resources, to help people create their product prototypes
              beautifully and efficiently.
            </Text>

            <ChatItemMessageInfo>
              <ChatItemMessageCtrl>
                <LikeOutlined /> 0 <DislikeOutlined /> 0
              </ChatItemMessageCtrl>
              <ChatItemMessageDate>05 Ноября 23:37</ChatItemMessageDate>
            </ChatItemMessageInfo>
          </ChatItemMessage>
        </ChatItem>

        <ChatItem>
          <Avatar shape="square" icon={<UserOutlined />} />
          <ChatItemMessage>
            <Text type="secondary">Name</Text>
            <Text type="primary">
              Design principles, practical patterns and high quality design
              resources, to help people create their product prototypes
              beautifully and efficiently.
            </Text>

            <ChatItemMessageInfo>
              <ChatItemMessageCtrl>
                <LikeOutlined /> 0 <DislikeOutlined /> 0
              </ChatItemMessageCtrl>
              <ChatItemMessageDate>05 Ноября 23:37</ChatItemMessageDate>
            </ChatItemMessageInfo>
          </ChatItemMessage>
        </ChatItem>

        <ChatItem>
          <Avatar shape="square" icon={<UserOutlined />} />
          <ChatItemMessage>
            <Text type="secondary">Name</Text>
            <Text type="primary">
              Design principles, practical patterns and high quality design
              resources, to help people create their product prototypes
              beautifully and efficiently.
            </Text>

            <ChatItemMessageInfo>
              <ChatItemMessageCtrl>
                <LikeOutlined /> 0 <DislikeOutlined /> 0
              </ChatItemMessageCtrl>
              <ChatItemMessageDate>05 Ноября 23:37</ChatItemMessageDate>
            </ChatItemMessageInfo>
          </ChatItemMessage>
        </ChatItem>

        <ChatItem>
          <Avatar shape="square" icon={<UserOutlined />} />
          <ChatItemMessage>
            <Text type="secondary">Name</Text>
            <Text type="primary">
              Design principles, practical patterns and high quality design
              resources, to help people create their product prototypes
              beautifully and efficiently.
            </Text>

            <ChatItemMessageInfo>
              <ChatItemMessageCtrl>
                <LikeOutlined /> 0 <DislikeOutlined /> 0
              </ChatItemMessageCtrl>
              <ChatItemMessageDate>05 Ноября 23:37</ChatItemMessageDate>
            </ChatItemMessageInfo>
          </ChatItemMessage>
        </ChatItem>

        <ChatItem>
          <Avatar shape="square" icon={<UserOutlined />} />
          <ChatItemMessage>
            <Text type="secondary">Name</Text>
            <Text type="primary">
              Design principles, practical patterns and high quality design
              resources, to help people create their product prototypes
              beautifully and efficiently.
            </Text>

            <ChatItemMessageInfo>
              <ChatItemMessageCtrl>
                <LikeOutlined /> 0 <DislikeOutlined /> 0
              </ChatItemMessageCtrl>
              <ChatItemMessageDate>05 Ноября 23:37</ChatItemMessageDate>
            </ChatItemMessageInfo>
          </ChatItemMessage>
        </ChatItem>
      </ChatMessages>

      <ChatMoves>
        <Text type="secondary">Дадим мафии договориться</Text>
        <Text type="secondary">Следующий ход через: 2 мин 40 сек</Text>
      </ChatMoves>

      <ChatForm>
        <Input
          placeholder="Введите сообщение"
          size="large"
          suffix={<SmileTwoTone />}
        />
        <Button type="primary" size="large">
          Отправить
        </Button>
      </ChatForm>
    </ChatWrapper>
  );
};

export default Chat;

const { white, black } = colors;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: ${white};
  color: ${black};
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
`;
const ChatItem = styled.div`
  display: flex;
  gap: 1em;
`;
const ChatItemMessage = styled.div`
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
