import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import SignUp1 from "./pages/signUp1/SignUp1";
import SignUp2 from "./pages/signUp2/SignUp2";
import SignUp3 from "./pages/signUp3/SignUp3";

import PasswordRecovery from "./pages/passwordRecovery/PasswordRecovery";
import Profile from "./pages/profile/Profile";
import { VolunteerProfile } from "./pages/VolunteerProfile/VolunteerProfile";
import ListVolunteers from "./pages/listVolunteers/ListVolunteers";
import Error from "./pages/error/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup1" element={<SignUp1 />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/signup3" element={<SignUp3 />} />

        <Route path="/homelogged" element={<Home />} />
        <Route path="/recovery" element={<PasswordRecovery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/volunteer-profile" element={<VolunteerProfile />} />

        <Route path="/list" element={<ListVolunteers />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
