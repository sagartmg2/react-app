import logo from './logo.svg';
import './App.css';

import Button from './Button';
import { SmallButton, BigButton } from './NamedButton';
import Home from './Home';
import Car from './Car';

function App() {


  return (
    <div className="App">
      <div>
        <Car />
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



