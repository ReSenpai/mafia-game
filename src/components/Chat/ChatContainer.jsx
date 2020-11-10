import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addMessage, getChatMessagesThunk } from 'src/redux/Chat/chat_reducer';
import { getChatMessages } from 'src/redux/Chat/chat_selectors';
import Chat from './Chat';

const ChatContainer = ({ chatMessages, getChatMessagesThunk, addMessage }) => {
  useEffect(() => {
    getChatMessagesThunk();
  }, []);

  return <Chat {...{ chatMessages, addMessage }} />;
};

const mapDispatchToProps = state => ({
  chatMessages: getChatMessages(state),
});

export default connect(mapDispatchToProps, {
  getChatMessagesThunk,
  addMessage,
})(ChatContainer);
