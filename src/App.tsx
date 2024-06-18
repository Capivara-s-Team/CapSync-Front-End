import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/ErrorPage";
import Register from "./pages/register/Register";
import ListVolunteers from "./pages/listVolunteers/ListVolunteers";
import PasswordRecovery from "./pages/passwordRecovery/PasswordRecovery";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
