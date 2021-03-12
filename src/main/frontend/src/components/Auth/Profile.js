import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import DbService from "../../_services/DbService";

const Profile = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [oldpassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const onChangeEmail = event => {
        setEmail(event.target.value);
    }
    const onChangeName = event => {
        setName(event.target.value);
    }
    const onChangeOldPassword = event => {
        setOldPassword(event.target.value);
    }
    const onChangePassword = event => {
        setPassword(event.target.value);
    }
    const onChangeRepassword = event => {
        setRepassword(event.target.value);
    }
    const onSubmitForm = event => {
        event.preventDefault()
        if (password !== repassword) {
            alert('Passwords do not match!')
            return
        }
        DbService.register(email, password, name)
    }

    return (
        <>
            <h1 className={'text-center'}>Profile</h1>
            <h3 className={'text-center'}>Update your personal information</h3>
            <Form className={'mx-auto'} onSubmit={onSubmitForm}>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control disabled type="email" value={email} onChange={onChangeEmail} placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={onChangeName} placeholder="Enter name" required />
                </Form.Group>
                <Button className={'col-sm-2 offset-sm-5'} variant="dark" type="submit">
                    Submit
                </Button>
            </Form>

            <h3 className={'text-center mt-5'}>Update password</h3>
            <Form className={'mx-auto'} onSubmit={onSubmitForm}>
                <Form.Group controlId="oldpassword">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control type="password" value={oldpassword} onChange={onChangeOldPassword} placeholder="Enter old password" required />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={onChangePassword} placeholder="Enter password" required />
                </Form.Group>

                <Form.Group controlId="repassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control type="password" value={repassword} onChange={onChangeRepassword} placeholder="Repeat password" required />
                </Form.Group>
                <Button className={'col-sm-2 offset-sm-5'} variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Profile
