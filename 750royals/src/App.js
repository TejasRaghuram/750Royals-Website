import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Awards from "./pages/Awards";
import Outreach from "./pages/Outreach";
import Error from "./pages/Error";

function App() {

  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="awards" element={<Awards />} />
                <Route path="outreach" element={<Outreach />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
