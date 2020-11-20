import React from 'react';
import styled from 'styled-components';

// === gql ===
import { useQuery, gql } from '@apollo/client';

// === ui ===
import { List, ListItem, Avatar, Badge, Typography } from '@material-ui/core';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

const GET_USERS_LENGTH = gql`
  query {
    countUsers
  }
`;

const UserList: React.FC = () => {
  // фетчим данные, похоже на кастомный useFetch или на SWR
  // data, error, loading(true - loading now, false - already loaded)
  const { data, loading } = useQuery(GET_USERS_LENGTH);

  const placeholderData = [
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

  const countMafia = () =>
    placeholderData.filter(({ isMafia }) => isMafia).length;

  return (
    <Wrapper>
      <StyledText>
        <Typography color="secondary">
          Участники: {loading ? 0 : data?.countUsers}
        </Typography>
      </StyledText>
      <StyledList>
        <List>
          {placeholderData.map(item => (
            <ListItem key={item.name}>
              <StyledListItem>
                <Avatar variant="square">
                  <PermIdentityOutlinedIcon />
                </Avatar>
                <ListItemText>{item.name}</ListItemText>
                <Badge badgeContent={item.count} />
              </StyledListItem>
            </ListItem>
          ))}
        </List>
      </StyledList>
      <StyledText>
        <Typography color="secondary">
          Мафиози в игре: {countMafia()}
        </Typography>
      </StyledText>
    </Wrapper>
  );
};

export default UserList;

const Wrapper = styled.div`
  /* width: 100%; */
  height: 80vh;
  overflow-y: scroll;
  flex-grow: 1;
`;

const StyledText = styled.div`
  text-align: left;
  padding: 0.5em 0;
`;

const StyledList = styled.ul`
  li {
    padding-left: 0;
  }
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
