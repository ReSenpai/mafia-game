import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  user?: Maybe<UserQuery>;
  lobby?: Maybe<LobbyQuery>;
};

/** Query to interact with `Users` collection */
export type UserQuery = {
  __typename?: 'UserQuery';
  /** Returns a current `User` */
  getMe?: Maybe<User>;
  /** Returns a `User` where `User.id = id` in database. */
  getUserById?: Maybe<User>;
  /** Returns a `User` where `User.name = name` in database. */
  getUserByName?: Maybe<User>;
  /** Returns a list of users. Use the `limit` argument to get only first `N` users. */
  getUsers?: Maybe<Array<Maybe<User>>>;
  /** Return the count of `User` documents. */
  countUsers?: Maybe<Scalars['Int']>;
};


/** Query to interact with `Users` collection */
export type UserQueryGetUserByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Query to interact with `Users` collection */
export type UserQueryGetUserByNameArgs = {
  name?: Maybe<Scalars['String']>;
};


/** Query to interact with `Users` collection */
export type UserQueryGetUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isLogged?: Maybe<Scalars['Boolean']>;
};

/** Query to interact with `Lobby` collection */
export type LobbyQuery = {
  __typename?: 'LobbyQuery';
  /** Returns a `Lobby` where `Lobby.id = id` in database. */
  getLobbyById?: Maybe<Lobby>;
};


/** Query to interact with `Lobby` collection */
export type LobbyQueryGetLobbyByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type Lobby = {
  __typename?: 'Lobby';
  id?: Maybe<Scalars['ID']>;
  players?: Maybe<Array<Maybe<Player>>>;
  messages?: Maybe<Array<Maybe<Player>>>;
};

export type Player = {
  __typename?: 'Player';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isLogged?: Maybe<Scalars['Boolean']>;
  isAlive?: Maybe<Scalars['Boolean']>;
  hasShield?: Maybe<Scalars['Boolean']>;
  isPeaceful?: Maybe<Scalars['Boolean']>;
};

export type RootMutation = {
  __typename?: 'RootMutation';
  user?: Maybe<UserMutation>;
};

/** Mutation to interact with `Users` collection. */
export type UserMutation = {
  __typename?: 'UserMutation';
  /** Creates and adds `User` document. */
  addUser?: Maybe<User>;
  /** Returns a `User` where `User.login and User.password` in database. */
  loginUser?: Maybe<User>;
  /** Deletes `User` document from database where `User.id = id`. */
  deleteUserById?: Maybe<User>;
  /** Updates `User` document where `User.id = id`. */
  updateUserById?: Maybe<User>;
};


/** Mutation to interact with `Users` collection. */
export type UserMutationAddUserArgs = {
  name?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isLogged?: Maybe<Scalars['Boolean']>;
};


/** Mutation to interact with `Users` collection. */
export type UserMutationLoginUserArgs = {
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


/** Mutation to interact with `Users` collection. */
export type UserMutationDeleteUserByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Mutation to interact with `Users` collection. */
export type UserMutationUpdateUserByIdArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isLogged?: Maybe<Scalars['Boolean']>;
};

export type AddUserMutationVariables = Exact<{
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;


export type AddUserMutation = (
  { __typename?: 'RootMutation' }
  & { user?: Maybe<(
    { __typename?: 'UserMutation' }
    & { addUser?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'login' | 'name'>
    )> }
  )> }
);

export type CountUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type CountUsersQuery = (
  { __typename?: 'RootQuery' }
  & { user?: Maybe<(
    { __typename?: 'UserQuery' }
    & Pick<UserQuery, 'countUsers'>
  )> }
);

export type GetUsersQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetUsersQuery = (
  { __typename?: 'RootQuery' }
  & { user?: Maybe<(
    { __typename?: 'UserQuery' }
    & { getUsers?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    )>>> }
  )> }
);

export type LoginUserMutationVariables = Exact<{
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;


export type LoginUserMutation = (
  { __typename?: 'RootMutation' }
  & { user?: Maybe<(
    { __typename?: 'UserMutation' }
    & { loginUser?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'login'>
    )> }
  )> }
);


export const AddUserDocument = gql`
    mutation AddUser($login: String, $password: String) {
  user {
    addUser(login: $login, password: $password) {
      id
      login
      name
    }
  }
}
    `;

export function useAddUserMutation() {
  return Urql.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument);
};
export const CountUsersDocument = gql`
    query CountUsers {
  user {
    countUsers
  }
}
    `;

export function useCountUsersQuery(options: Omit<Urql.UseQueryArgs<CountUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CountUsersQuery>({ query: CountUsersDocument, ...options });
};
export const GetUsersDocument = gql`
    query GetUsers($limit: Int) {
  user {
    getUsers(limit: $limit) {
      id
      name
    }
  }
}
    `;

export function useGetUsersQuery(options: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUsersQuery>({ query: GetUsersDocument, ...options });
};
export const LoginUserDocument = gql`
    mutation loginUser($login: String, $password: String) {
  user {
    loginUser(login: $login, password: $password) {
      id
      name
      login
    }
  }
}
    `;

export function useLoginUserMutation() {
  return Urql.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument);
};