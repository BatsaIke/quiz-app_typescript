import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './components/redux/quiz/quizSlice';

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// Conditionally use React.StrictMode only during development
const RootComponent = process.env.NODE_ENV === 'development' ? (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
) : (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

root.render(RootComponent);