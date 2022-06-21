import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("dev@dev.com");
    const [password, setPassword] = useState("password");

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
                localStorage.setItem("access_token",res.data.access_token)

            })
            .catch(err => {

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
