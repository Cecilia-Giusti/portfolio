import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
