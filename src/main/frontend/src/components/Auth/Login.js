import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import DbService from "../../_services/DbService";

const Login = () => {
    const history = useHistory()
    if (DbService.getCurrentUser()) {
        history.push('/profile')
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = event => {
        setEmail(event.target.value);
    }
    const onChangePassword = event => {
        setPassword(event.target.value);
    }
    const onSubmitForm = event => {
        event.preventDefault()
        DbService.login(email, password)
            .then(r => {
                if (r) {
                    history.push('/')
                }
            })
            .catch(error => alert(error))
    }

    return (
        <>
            <h1 className={'text-center'}>SIGN IN</h1>
            <Form className={'mx-auto'} onSubmit={onSubmitForm}>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={onChangeEmail} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={onChangePassword} placeholder="Enter password" required />
                </Form.Group>
                <Button className={'col-sm-2 offset-sm-5'} variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Login
