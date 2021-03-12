import './App.css';
import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch, useParams, withRouter} from 'react-router-dom';
import CardDetails from "./components/CardDetails/CardDetails";
import Header from "./components/Header/Header";
import CardsContainer from "./components/Cards/CardsContainer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Auth/Profile";

const HeaderWithRouter = withRouter(Header);

function App() {

    return (
        <BrowserRouter>
            <Fragment>
                <HeaderWithRouter/>
                <div className={'container'}>
                    <div className="row mt-4">
                        <div className="col-10 mx-auto">

                            <Switch>
                                <Route path='/profile' render={() => <Profile/>}/>
                                <Route path='/register' render={() => <Register/>}/>
                                <Route path='/login' render={() => <Login/>}/>
                                <Route path={'/:id'} children={<Child/>}/>
                                <Route path='/' exact render={() => <CardsContainer/>}/>
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
