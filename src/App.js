import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from 'components/protected-route'
import Todo from 'views/todo'
import Login from 'views/login'
import SignUp from 'views/sign-up'

function App() {
    return (
        <Routes>
            <Route
                path="/todo"
                element={
                    <ProtectedRoute>
                        <Todo />
                    </ProtectedRoute>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/todo" replace />} />
        </Routes>
    )
}

export default App
