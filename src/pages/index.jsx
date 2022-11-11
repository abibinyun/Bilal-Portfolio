import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import MainApp from "../pages/mainApp/MainApp";

const index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainApp />} />
          <Route exact path="/Detail" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
};

export default index;
