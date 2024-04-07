import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import UpdateUser from "./Pages/UpdateUser";
import Items from "./Pages/Items";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/items" element={<Items />} />
          <Route path="/updateuser" element={<UpdateUser />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
