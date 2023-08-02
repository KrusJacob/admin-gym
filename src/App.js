import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import Page_404 from "./pages/404";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Page_404 />} />
      </Routes>
    </>
  );
}

export default App;
