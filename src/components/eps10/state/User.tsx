import { useState } from 'react';

type AuthProps = {
    name: string,
    email: string,
}

const User = () => {
    const [user, setUser] = useState<AuthProps | null>(null)
    const handleLogin = () => setUser(
        {
            name: 'Ricky Maldonado',
            email: 'oti@kosobo.ps'
        })
    const handleLogout = () => setUser(null)
    return (
        <div>
            <button onClick={handleLogin}> Login</button>
            <button onClick={handleLogout}> Logout</button>
            <div>User is {user?.name}</div>
            <div>Email is {user?.email}</div>

        </div>
    )
}

export default User