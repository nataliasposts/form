import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layout/App.tsx';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './router/RootRouter.tsx';
import { ApolloProvider } from '@apollo/client';
import client from './client.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter basename="/table">
        <App>
          <RootRouter />
        </App>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
