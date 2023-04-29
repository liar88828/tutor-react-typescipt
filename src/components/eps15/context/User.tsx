import { useContext } from 'react';
import { UserContext } from './UserContext';


const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'Amy Ramos',
                email: 'etolivob@mob.my'
            })
        }
    }

    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }
    
    return (
        <div>
            <div className="">
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="">
                <p>User Name Is {userContext?.user?.name}</p>
                <p>User Email Is {userContext?.user?.email}</p>
            </div>
        </div>
    )
}

export default User