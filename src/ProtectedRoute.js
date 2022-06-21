import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'


export default function ProtectedRoute() {
    const [user, setUser] = useState(null);


    // TODO: call api using our token 

    return user ? <Outlet /> : <Navigate to="/login" />

}
