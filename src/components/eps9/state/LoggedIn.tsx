import { useState } from "react"


const LoggedIn = () => {
    const [isLogging, setIsLogging] = useState(false)
    const handleLogin = () => setIsLogging(true)
    const handleLogout = () => setIsLogging(0)// <- error

    return (
        <div>
            <button onClick={handleLogin}> Login</button>
            <button onClick={handleLogout}> Logout</button>
            <div>User is {isLogging.length ? 'LoggedIn' : 'LoggedOut'}</div>
            {/*                       ^  false  */}
        </div>
    )
}

export default LoggedIn