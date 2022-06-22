import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext';


import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './app/reducers/auth'



export default function ProtectedRoute() {
    const [user, setUser] = useState(null);

    const context = useContext(UserContext);

    const [redirect, setRedirect] = useState(false);

    const { is_logged_in: is_logged_in_old, setLogin } = context

    const is_logged_in = useSelector((state) => { return state.auth.is_logged_in })
    const dispatch = useDispatch()


    const navigate = useNavigate();

    useEffect(() => {

        if (localStorage.getItem("access_token")) {

            axios.get("https://jsonplaceholder.typicode.com/users/1", {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
                .then(res => {
                    // setLogin(true)

                    dispatch(login())
                    
                    setRedirect(true)
                })
                .catch(err => {
                    navigate("/login")
                    setRedirect(true)
                })

        } else {
            navigate("/login")
        }

    }, []);

    if (!redirect) {
        return <p>loading....</p>
    }

    return is_logged_in ? <Outlet /> : <Navigate to="/login" />

}
