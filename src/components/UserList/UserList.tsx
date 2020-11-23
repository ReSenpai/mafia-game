import React from 'react';

// === gql ===
import { useCountUsersQuery, useGetUsersQuery } from 'src/generated/graphql';

// === material-ui ===
import { List, ListItem, Avatar, Typography, styled } from '@material-ui/core';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

const UserList: React.FC = () => {
  const Wrapper = styled('div')({
    height: '80vh',
    flexGrow: 0.7,
    margin: '0 auto',
  });

  const StyledList = styled('ul')({
    overflowY: 'scroll',
    height: 'inherit',
  });

  const ListItemText = styled('div')({
    cursor: 'pointer',
    textAlign: 'center',
    height: 'inherit',
    width: '100%',

    '&:hover': {
      textDecoration: 'underline',
    },
  });

  const [res] = useCountUsersQuery();
  const [res2] = useGetUsersQuery();

  const usersCounter = res.data?.user?.countUsers || 0;
  const users = res2.data?.user?.getUsers || [];

  return (
    <Wrapper>
      <Typography color="secondary" align="center">
        Участники: {usersCounter}
      </Typography>
      <StyledList>
        <List>
          {users.map(item => (
            <ListItem key={item?.id}>
              <Avatar variant="square">
                <PermIdentityOutlinedIcon />
              </Avatar>
              <ListItemText>{item?.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </StyledList>
    </Wrapper>
  );
};

export default UserList;
