import { Navigate } from 'react-router-dom'
import { STORAGE_JWT_KEY } from 'core/constants'

const ProtectedRoute = ({ children }) => {
    var isLogin = localStorage.getItem(STORAGE_JWT_KEY)

    if (!isLogin) {
        return <Navigate exact to="/login" />
    }

    return children
}

export default ProtectedRoute
