import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import DbService from "../../_services/DbService";
import {useHistory} from "react-router-dom";

const Profile = () => {
    const history = useHistory()
    if (!DbService.getCurrentToken()) {
        history.push('/login')
    }

    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')))
    // const [profile, setProfile] = useState({})

    useEffect(() => {
        DbService.getUserProfile()
            .then(res => {
                console.log(profile)
                console.log(res)
                setProfile(res)
                console.log(profile)
            })
    }, [])
    // }, [profile])

    //
    // useEffect(() => {
    //     function checkUserData() {
    //         const item = localStorage.getItem('profile')
    //         if (item) {
    //             setProfile(JSON.parse(item))
    //         }
    //     }
    //     window.addEventListener('storage', checkUserData)
    //     return () => {
    //         window.removeEventListener('storage', checkUserData)
    //     }
    // }, [])

    const [email, setEmail] = useState(profile.email);
    const [name, setName] = useState(profile.name);
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
    const onSubmitFormName = event => {
        event.preventDefault()
        DbService.editUserName(name)
    }
    const onSubmitFormPassword = event => {
        event.preventDefault()
        if (password !== repassword) {
            alert('Passwords do not match!')
            return
        }
        DbService.editUserPassword(oldpassword, password)
        setOldPassword('')
        setPassword('')
        setRepassword('')
    }

    return (
        <>
            <h1 className={'text-center'}>{profile.name}'s Profile</h1>
            <h3 className={'text-center'}>Update your personal information</h3>
            <Form className={'mx-auto'} onSubmit={onSubmitFormName}>
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
            <Form className={'mx-auto'} onSubmit={onSubmitFormPassword}>
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
