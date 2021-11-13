
import { useContext } from "react"
import {AuthContext} from '../Hooks/AuthProvider'

const useAuth = () => {
    return useContext(AuthContext) 
}

export default useAuth;