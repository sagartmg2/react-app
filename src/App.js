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
} from "react-router-dom";

import { Link } from "react-router-dom";

function App() {

  const [show, setfirst] = useState(true)

  return (
    <div className="App">
      <div>
        <div>
          <h1>Home</h1>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="car">car</Link> |{" "}
            <Link to="todo">TODO</Link>
            {/* <a href = "todo"/> */}
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path=":teamId" element={<Team />} />
                <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} /> */}
          </Route>
          <Route path="car" element={<Car />} />
          <Route path="todo" element={<Todoo />}>
          </Route>
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



