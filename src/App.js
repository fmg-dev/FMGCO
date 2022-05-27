import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
