import './App.css'
import Dashboard from './pages/Dashboard'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="app-container">
      <div className="fixed-box">
        <h1>Auth0 SSO | Dev</h1>
        <div className="actions">
          {/* 2 Button Login và Logout tùy điều kiện hiển thị */}
          {!isAuthenticated && (
            <LoginButton />
          )}
          {isAuthenticated && (
            <LogoutButton />
          )}
        </div>
        {/* Phần dashboard sau khi đăng nhập */}
        <Dashboard />
      </div>      
    </div>
  )
}

export default App
