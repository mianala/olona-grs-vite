import { Navigate, Routes, Route } from "react-router-dom";
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
import "./App.sass";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth/connexion" />} />
        <Route path="auth">
          <Route path="connexion" element={<SignIn />} />
          <Route path="inscription" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
