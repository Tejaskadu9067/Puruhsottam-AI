import Login from "./Usercomponents/Login";
import Register from "./Usercomponents/Register";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContext } from "./context/Context";
import axios from "axios";
import Profile from "./Usercomponents/Profile";

axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContext.Provider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </UserContext.Provider>
  );
}



export default App;
