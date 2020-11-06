import styled from 'styled-components';

// === antd ===
import { List, Avatar, Badge, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Text } = Typography;

// === utils ===
import { colors } from '../../utils/variables';

const UserList = () => {
  const data = [
    { avatar: '', name: 'Den Ri', count: 2, isMafia: true },
    { avatar: '', name: 'Зомби Ich bin Roboter🧟‍♂️', count: 4, isMafia: false },
    { avatar: '', name: 'Aleksandr', count: 11, isMafia: false },
    { avatar: '', name: 'Nikita Chaykin', count: 0, isMafia: false },
    { avatar: '', name: 'Foma', count: 0, isMafia: false },
    { avatar: '', name: 'Lupusregina[beta]', count: 0, isMafia: true },
    { avatar: '', name: 'Dj Лимончик ) 🦇 🐓 🍑', count: 0, isMafia: false },
    { avatar: '', name: 'Евдоким', count: 0, isMafia: false },
    { avatar: '', name: 'bakunov', count: 0, isMafia: false },
    { avatar: '', name: 'Alex Kovalev', count: 0, isMafia: false },
  ];

  const countMafia = () => data.filter(({ isMafia }) => isMafia).length;

  return (
    <Wrapper>
      <StyledText>
        <Text type="secondary">Участники: {data.length}</Text>
      </StyledText>
      <StyledList>
        <List
          size="large"
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <StyledListItem>
                <Avatar shape="square" icon={<UserOutlined />} />
                <ListItemText>{item.name}</ListItemText>
                <Badge count={item.count} showZero />
              </StyledListItem>
            </List.Item>
          )}
        />
      </StyledList>
      <StyledText>
        <Text type="secondary">Мафиози в игре: {countMafia()}</Text>
      </StyledText>
    </Wrapper>
  );
};

export default UserList;

const { white } = colors;

const Wrapper = styled.div`
  width: fit-content;
  min-width: 300px;
  background-color: ${white};
`;

const StyledText = styled.div`
  text-align: right;
  padding: 0.5em 0;
`;

const StyledList = styled.ul`
  background-color: ${white};
`;

const StyledListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

const ListItemText = styled.div`
  width: 70%;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
