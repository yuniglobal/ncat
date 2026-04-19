import { Route, Routes } from "react-router";
import Layout from "./components/layout";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as children, e.g.:
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        */}
      </Route>
    </Routes>
  );
};

export default App;