import Login from "./Usercomponents/Login";
import Register from "./Usercomponents/Register";
import Home from "./components/Home";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Nested routes for /Home */}
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}



export default App;
