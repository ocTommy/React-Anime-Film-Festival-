import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriesPage from "./pages/Categories";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/Categories" element={<CategoriesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
