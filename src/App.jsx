import "./App.sass";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth/signin" />} />
        <Route path="auth">
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
