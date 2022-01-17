import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Servicios from "./modules/Servicios";
import Sucursal from "./modules/Sucursal";


function App() {
    return ( 
      <Router>
       <Routes> 
       <Route path="/" element={<Servicios/>}  />
       </Routes>
      </Router>
    );
}

export default App;