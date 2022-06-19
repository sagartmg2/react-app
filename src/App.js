import logo from './logo.svg';
import './App.css';

import Button from './Button';
import { SmallButton, BigButton } from './NamedButton';
import Home from './Home';
import Car from './Car';
import Todoo from './Todo';
import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Show from './Todo/Show';

function App() {

  const [show, setfirst] = useState(true)

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
                </li>
                <li class="nav-item px-2">
                  <Link to="car">car</Link>
                </li>
                <li class="nav-item px-2">
                  <Link to="todos">TODO</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path=":teamId" element={<Team />} />
                <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} /> */}
          </Route>
          <Route path="car" element={<Car />} />
          <Route path="todos" element={<Todoo />}>
            <Route path=":id" element={<Show />} />
          </Route>
          {/* <Route path="todos/:id" element={<Show />}/> */}
        </Routes>

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



