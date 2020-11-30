import React from 'react';
import { connect } from 'react-redux';
import Register from './Register';
import { AppStateType } from '../../redux/index';
import { registration } from '../../redux/Auth/auth_reducer';
import { ThunkType } from 'src/redux/Auth/types';
import { getIsAuth } from 'src/redux/Auth/auth_selectors';
import { Redirect } from 'react-router-dom';

type MapStatePropsType = {
  isAuth: boolean
};
type MapDispatchPropsType = {
  registration: (login: string, password: string, addUser: any) => ThunkType;
}
type OwnPropsType = {
  //
}

export type IRegisterContainerProps = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const RegisterContainer: React.FC<any> = ({
  registration,
  isAuth
}) => {
  if (isAuth) return <Redirect to='game' />
  return <Register {...{registration}} />;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: getIsAuth(state)
});

export default connect(mapStateToProps, {
  registration
})(RegisterContainer);
