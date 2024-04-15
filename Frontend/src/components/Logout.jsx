import React from 'react'
import { useAuth } from '../context/AuthProvider'
function Logout() {
    const [authUser,setAuthUser] = useAuth()

    const handleLogout = (e) =>{
        try {
            setAuthUser({
                ...authUser,
                user : null
        })
        localStorage.removeItem("Users")
        alert("User Logged Out")    
        window.location.reload()
        } catch (error) {
            
        }
    }
  return (
    <button
    onClick={handleLogout}
    className='bg-red-500 text-white hover:bg-red-800 duration-300 rounded-md px-3 py-2  cursor-pointer'>Logout</button>
  )
}

export default Logout