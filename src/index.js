import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='users'>
          <Route index element={<List />}/>
          <Route path=':userId' element={<Single />}/>
          <Route path='new' element={<New />}/>
        </Route>
        <Route path='products'>
          <Route index element={<List />}/>
          <Route path=':productId' element={<Single />}/>
          <Route path='new' element={<New />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

