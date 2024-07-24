import Login from "./assets/components/Login"
import Profile from "./assets/components/Profile"
import UserContextProvider from "./assets/context/UserContextProvider"


function App() {

  return (
    <UserContextProvider>
     <h1>hello</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
