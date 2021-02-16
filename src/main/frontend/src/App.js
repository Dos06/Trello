import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Cards from "./components/Cards/Cards";
import CardDetails from "./components/CardDetails/CardDetails";

function App() {
    return (
        <BrowserRouter>
            <div className={'container'}>
                <div className="row mt-4">
                    <div className="col-10 mx-auto">

                        {/*TODO: make navigation by Card / Task*/}
                        <Route path={'/1'} render={ () => <CardDetails id={1}/> } />
                        <Route path={'/2'} render={ () => <CardDetails id={2}/> } />
                        <Route path={'/3'} render={ () => <CardDetails id={3}/> } />

                        <Route path='/' exact render={ () => <Cards/> } />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
