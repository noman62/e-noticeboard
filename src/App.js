import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage/Homepage";
import UpcomingNotice from "./components/UpcomingNotice/UpcomingNotice";
import UpdateData from "./components/UpdateData/UpdateData";
import Register from "./components/Register/Register";
import Deshboard from "./components/Deshboard/Deshboard";
import ManageNotice from "./components/ManageNotice/ManageNotice";
import Form from "./components/Form/Form";
import CurrentDate from "./components/CurrentDate/CurrentDate";
import ImageForm from "./components/ImageForm/ImageForm";
import ManageImage from "./components/ManageImage/ManageImage";
import OfficeForm from "./components/OfficeForm/OfficeForm";
import OfficeInfo from "./components/OfficeInfo/OfficeInfo";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/imageForm" element={<ImageForm/>} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Deshboard" element={<Deshboard />} />
      <Route path="/upcomingNotice" element={<UpcomingNotice />} />
      <Route path="/updateNotice" element={<ManageNotice/>} />
      <Route path="/updateImage" element={<ManageImage/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/newForm" element={<OfficeForm/>} />
      <Route path="/update/:id" element={<UpdateData/>} />
      <Route path="/office" element={<OfficeInfo/>} />
      <Route path="/date" element={<CurrentDate/>} />
      
    </Routes>
  </div>
  );
}

export default App;

