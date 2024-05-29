import {Route, Routes} from "react-router-dom"
import Dash from "./Dash";
import Register from "./auth/Register";
import Login from "./auth/Login";
import PrivateRoutes from "./utils/PrivateRoute";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<PrivateRoutes />}>
        <Route element={<Dash />} path="/dashboard" />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      </Routes> 
    </>
  );
}

export default App;
