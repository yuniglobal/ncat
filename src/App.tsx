import { Route, Routes } from "react-router";
import Layout from "./components/layout";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;