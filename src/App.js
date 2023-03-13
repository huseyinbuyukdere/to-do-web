import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from 'components/protected-route'
import Todo from 'views/todo'
import Login from 'views/login'
import SignUp from 'views/sign-up'
import { AppContext, AppContextHook } from 'core/context'

function App() {
    const value = AppContextHook()
    return (
        <AppContext.Provider value={value}>
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
        </AppContext.Provider>
    )
}

export default App
