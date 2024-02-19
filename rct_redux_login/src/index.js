import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './features/counter/Login';
import Four from './features/counter/Four';
import DjangoLogin from './features/counter/DjangoLogin';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<Four />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/djangologin' element={<DjangoLogin />} />
                </Route>
                <Route path="*" element={<h1 style={{ textAlign: 'center' }}>Error: Page not found</h1>}></Route>
            </Routes>
        </BrowserRouter>

    </Provider>
  </React.StrictMode>
);
