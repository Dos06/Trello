import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import DbService from "../../_services/DbService";

const NavItems = () => {
    const logout = () => {
        DbService.logout()
    }

    const user = DbService.getCurrentUser()
    console.log(user)
    return (
        user ?
            <>
                <NavLink to={'/profile'} className="nav-link">Profile</NavLink>
                <NavLink to={'/login'} onClick={logout} className="nav-link">Logout</NavLink>
            </>
            :
            <>
                <NavLink to={'/register'} className="nav-link">Register</NavLink>
                <NavLink to={'/login'} className="nav-link">Login</NavLink>
            </>
    )
}

const Header = (props) => {
    const { location } = props;
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">I-TRELLO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to={'/'} className="nav-link">Home</NavLink>
                </Nav>
                <Nav activeKey={location.pathname}>
                    <NavItems/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;