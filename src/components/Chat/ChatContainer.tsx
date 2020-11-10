import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addMessage, getChatMessagesThunk } from 'src/redux/Chat/chat_reducer';
import { getChatMessages } from 'src/redux/Chat/chat_selectors';
import Chat from './Chat';
import { IChatMessage } from 'src/types';
import { ThunkType } from 'src/redux/Auth/types';
import { IAddMessage } from 'src/redux/Chat/types';

interface ChatContainerProps {
  chatMessages: IChatMessage[];
  getChatMessagesThunk: ThunkType;
  addMessage: IAddMessage;
}
const ChatContainer: React.FC<any> = ({
  chatMessages,
  getChatMessagesThunk,
  addMessage,
}) => {
  useEffect(() => {
    getChatMessagesThunk();
  }, []);

  return <Chat {...{ chatMessages, addMessage }} />;
};

const mapDispatchToProps = (state: any) => ({
  chatMessages: getChatMessages(state),
});

export default connect(mapDispatchToProps, {
  getChatMessagesThunk,
  addMessage,
})(ChatContainer);
