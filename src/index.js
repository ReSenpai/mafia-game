import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// === router ===
import { BrowserRouter } from 'react-router-dom';

// === styles ===
import 'normalize.css';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

// === redux ===
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
