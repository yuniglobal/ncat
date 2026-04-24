import { Route, Routes } from "react-router";
import Layout from "./components/layout";
import Home from "./pages/home";
import RegisterPage from "./pages/register";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />

      </Route>
    </Routes>
  );
};

export default App;