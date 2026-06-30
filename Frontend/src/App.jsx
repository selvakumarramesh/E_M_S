import RegisterEmployee from "./Components/RegisterEmployee"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import RegisterEmployer from "./Components/RegisterEmployer"
import Employees from "./Components/Employees"
import Employer from "./Components/Employer"
import View from "./Components/View"
import Login from "./Components/Login"
import Registration from "./Components/Registration"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<View/>}/>
      <Route path="/register" element={<RegisterEmployee/>}/>
      <Route path="/empregister" element={<RegisterEmployer/>}/>
      <Route path="/view" element={<Employees/>}/>
      <Route path="/empview" element={<Employer/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Registration/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App