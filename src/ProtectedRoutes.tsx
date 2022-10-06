import React,{useEffect,useState} from "react"

import {Navigate, Outlet} from "react-router-dom"

const useAuth = () => {
    const [isAuth,setIsAuth]  = useState(false);
    
    
    useEffect(()=>{
        const auth = !!localStorage.getItem('isSignIn') && localStorage.getItem('isSignIn') === 'true';
        setIsAuth(auth)
    },[])
    return {isAuth};
}

//protected Route state
type ProtectedRouteType = {
	isAuth: boolean
}

const ProtectedRoutes = () => {
	const {isAuth} = useAuth()
		return isAuth ?<Outlet /> : (
			<Navigate to="/" />
		)
}

export default ProtectedRoutes