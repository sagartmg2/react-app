import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Login() {
    const [email, setEmail] = useState("dev@dev.com");
    const [password, setPassword] = useState("password");

    const context = useContext(UserContext);

    const { is_logged_in, setLogin } = context

    const navigate = useNavigate();


    function handleSumbit(event) {


        // console.log(event);
        event.preventDefault();
        // console.log(event.target.email.value);
        // event.target.email.value = ""
        // console.log("submitted");

        // axios.get("https://jsonplaceholder.typicode.com/todos")
        axios.post("http://localhost:8000/api/users/login", {
            email,
            password
        })
            .then(res => {
                console.log({ res });
                localStorage.setItem("access_token", res.data.access_token)
                setLogin(true)
                navigate(-1)
            })
            .catch(err => {
                setLogin(false)
            })
    }

    console.log("login --- rednder");
    return (
        <form onSubmit={handleSumbit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />

            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
