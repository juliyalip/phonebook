import React  from "react";
import {Route} from 'react-router-dom'
import { useAuth } from "../context/context";

interface Iprop{
    children: React.ReactNode
}

const PublicRouter =({children}: Iprop)=>{
    const {isLoggedIn} = useAuth()

    return(<Route >
      
    </Route>
        
    )
}


