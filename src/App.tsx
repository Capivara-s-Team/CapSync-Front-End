import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/ErrorPage";
import ListVolunteers from "./pages/listVolunteers/ListVolunteers";
import PasswordRecovery from "./pages/passwordRecovery/PasswordRecovery";
import SingUp1 from "./pages/singUp/SingUp1";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup1" element={<SingUp1 />} />
        <Route path="/singup2" element={<Home />} />  {/*Mudar rota para o singup2 */}
        <Route path="/recovery" element={<PasswordRecovery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin">
          <Route path="list" element={<ListVolunteers />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
