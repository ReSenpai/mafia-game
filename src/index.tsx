import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// === router ===
import { BrowserRouter } from 'react-router-dom';

// === styles ===
import './index.css';

// === redux ===
import { Provider } from 'react-redux';
import store from './redux/store';

// === gql ===
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
