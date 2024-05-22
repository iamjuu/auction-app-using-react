import { Routes,BrowserRouter, Route } from "react-router-dom";
import UserRoutes from '../src/Router/User'
// import AdminRouter from '../src/Router/Admin'
// import AgentRouter from '../src/Router/Agent'
import './App.css'
function App() {


  return (
  
<>
<BrowserRouter>
<Routes>
  <Route path="/*" element={<UserRoutes/>}/>
  {/* <Route path="/admin" element={<AdminRouter/>}/> */}
  {/* <Route path="/agent" element={<AgentRouter/>}/> */}
</Routes>
</BrowserRouter>

</>

   
  )
}

export default App
