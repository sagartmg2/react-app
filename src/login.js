import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './app/reducers/auth'

export default function Login() {
    const [email, setEmail] = useState("dev@dev.com");
    const [password, setPassword] = useState("password");

    const [state, setstate] = useState({
        email: "",
        password: "",
    });

    const is_logged_in = useSelector((state) => { return state.auth.is_logged_in })
    const dispatch = useDispatch()

    console.log({ is_logged_in });


    const context = useContext(UserContext);

    const { is_logged_in: is_logged_in_old, setLogin } = context

    const navigate = useNavigate();

    function handleSumbit(event) {

        // console.log(event);
        event.preventDefault();
        // console.log(event.target.email.value);
        // event.target.email.value = ""
        // console.log("submitted");

        axios.get("https://jsonplaceholder.typicode.com/todos")
            // axios.post("http://localhost:8000/api/users/login", {
            //     email,
            //     password
            // })
            .then(res => {
                console.log({ res });
                localStorage.setItem("access_token", res.data.access_token)

                // setLogin(true)
                dispatch(login())

                navigate(-1)
            })
            .catch(err => {
                setLogin(false)
            })
    }

    function handleChange(e) {
        // use event > target>name
        // use event > target>value
    }

    console.log("login --- rednder");

    return (
        <form onSubmit={handleSumbit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // onChange={handleChange}
                    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    // onChange={handleChange}
                    class="form-control" id="exampleInputPassword1" />

            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
