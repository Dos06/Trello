import './App.css';
import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch, useParams, withRouter} from 'react-router-dom';
import Cards from "./components/Cards/Cards";
import CardDetails from "./components/CardDetails/CardDetails";
import Header from "./components/Header/Header";

const HeaderWithRouter = withRouter(Header);

function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <HeaderWithRouter />
                <div className={'container'}>
                    <div className="row mt-4">
                        <div className="col-10 mx-auto">

                            <Switch>
                                <Route path={'/:id'} children={<Child/>} />
                                <Route path='/' exact render={ () => <Cards/> } />
                            </Switch>

                        </div>
                    </div>
                </div>
            </Fragment>
        </BrowserRouter>
    );
}

function Child() {
    let {id} = useParams();
    return (
        <CardDetails id={id}/>
    );
}

export default App;
