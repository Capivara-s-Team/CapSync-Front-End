import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/ErrorPage";
import ListVolunteers from "./pages/listVolunteers/ListVolunteers";
import PasswordRecovery from "./pages/passwordRecovery/PasswordRecovery";
import SignUp1 from "./pages/signUp1/SignUp1";
import SignUp2 from "./pages/signUp2/SignUp2";
import HomeLogged from "./pages/homeLogged/HomeLogged";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup1" element={<SignUp1 />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/homelogged" element={<HomeLogged />} />
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
