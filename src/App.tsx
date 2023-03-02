import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Project from "./components/Project";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { useState } from "react";

const App = () => {
  const [lastVisitedSection, setLastVisitedSection] = useState(0);
  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              setLastVisitedSection={setLastVisitedSection}
              lastVisitedSection={lastVisitedSection}
            />
          }
        />
        <Route path='/mes-projets/:id' element={<Project />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
