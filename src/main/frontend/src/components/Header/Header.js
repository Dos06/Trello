import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const { location } = props;
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">I-TRELLO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to={'/'} className="nav-link">Home</NavLink>
                    {/*    TODO: other pages links*/}
                </Nav>
                <Nav activeKey={location.pathname}>
                    <NavLink to={'/register'} className="nav-link">Register</NavLink>
                    <NavLink to={'/login'} className="nav-link">Login</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;