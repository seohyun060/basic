import ReactDOM from 'react-dom/client';
// THEMES
import GlobalStyle from './themes/base';
// ROUTER
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
// STORE
import { persistor, store } from '@/stores';
import { Provider } from 'react-redux';
// QUERY
import { QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { queryClient as apiQueryClient } from './api/query';

const queryClient = apiQueryClient;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);
