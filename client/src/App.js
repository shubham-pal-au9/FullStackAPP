
import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () => {
    return(
    <BrowserRouter>
      <Routes>
            <Route path="/" exact element={<Login />}/>
            <Route path="/register" exact element={<Register/>}/>
            <Route path="/dashboard" exact element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App;