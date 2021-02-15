import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Items from "./components/Items/Items";

function App() {
  return (
    <BrowserRouter>
        <div className={'container'}>
            <div className="row mt-4">
                <div className="col-10 mx-auto">
                    <Items/>
                </div>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
