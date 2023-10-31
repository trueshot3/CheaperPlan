import Footer from "./view/Footer/Footer";
import LandingPage from "./view/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./view/NavBar/NavBar";
import Detail from "./view/Detail/Detail";
import ListType from "./view/ListType/ListType";
import Login from "./view/Login/Login";
import SignUp from "./view/Login/SignUp";
import Notice from "./view/Notice/Notice";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/item/:itemId" element={<Detail />} />
            <Route path="/list/:itemType" element={<ListType />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/notice" element={<Notice />} />
          </Routes >
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
