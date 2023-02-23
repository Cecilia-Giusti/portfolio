import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
