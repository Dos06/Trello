import './App.css';
import ReactNotification from 'react-notifications-component'
import {store} from 'react-notifications-component'
import 'animate.css'
import 'react-notifications-component/dist/theme.css'
import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch, Redirect, useParams, withRouter} from 'react-router-dom';
import CardDetails from "./components/CardDetails/CardDetails";
import Header from "./components/Header/Header";
import CardsContainer from "./components/Cards/CardsContainer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Auth/Profile";
import DbService from "./_services/DbService";

const HeaderWithRouter = withRouter(Header);

function App() {
    const token = DbService.getCurrentToken()

    return (
        <BrowserRouter>
            <Fragment>
                <HeaderWithRouter/>
                <ReactNotification/>
                <div className={'container'}>
                    <div className="row mt-4">
                        <div className="col-10 mx-auto">

                            <Switch>
                                <Route path='/profile' render={() => <Profile/>}/>
                                <Route path='/register' render={() => <Register/>}/>
                                <Route path='/login' render={() => <Login store={store}/>}/>
                                <Route path={'/:id'} children={<Child/>}/>
                                <Route path='/' exact>
                                    {token ? <CardsContainer/> : <Redirect to={'/login'}/>}
                                </Route>
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
