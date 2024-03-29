import logo from './logo.svg';
import './App.css';
import React from "react"
import Button from './Button';
import { SmallButton, BigButton } from './NamedButton';
import Home from './Home';
import Car from './Car';
import Todoo from './Todo';
import { useContext, useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Show from './Todo/Show';
import ProtectedRoute from './ProtectedRoute';
import Login from './login';
import { UserContext } from './UserContext';
import Reducer from './Reducer';

export const CounterContext = React.createContext();

function App() {

  const [show, setfirst] = useState(true)
  const [is_logged_in, setLogin] = useState(false);

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div>
        <div>
          <h1>Home</h1>
          <nav>
          </nav>
        </div>

        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item px-2">
                  <Link to="/">Home</Link>
                  {/* <a href='/" */}
                </li>
                <li class="nav-item px-2">
                  <Link to="car">car</Link>
                </li>
                <li class="nav-item px-2">
                  <Link to="todos">TODO</Link>
                </li>
                <li class="nav-item px-2">
                  <Link to="reducer">reducer</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <CounterContext.Provider value={{ count, setCount }}>

          <UserContext.Provider value={{ is_logged_in, setLogin }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/reducer" element={<Reducer />} />
              <Route path="/" element={<Home is_logged_in={is_logged_in} />}>
              </Route>
              <Route element={<ProtectedRoute />} >
                <Route path="car" element={<Car />} />
                <Route path="todos">
                  <Route index element={<Todoo />} />
                  <Route path=":id" element={<Show />} />
                  {/* path = todos/{id} */}
                </Route>
              </Route>
              <Route path="*" element={<h1>page not found</h1>} />

              {/* <Route path="todos/:id" element={<Show />}/> */}
            </Routes>
          </UserContext.Provider>
        </CounterContext.Provider>

        {/* <p>app js</p> */}
        {/* {
          show &&
          <Todoo />
        } */}

        {/* <Car /> */}
        {/* <Home /> */}
        {/* <Button
          title="Big"
        >
          <p>this is big button</p>
        </Button >
        <Button
          title="Small"
        /> */}

        {/* <SmallButton />
        <BigButton /> */}

      </div>

    </div>
  );
}

export default App;





