import Header from "./Header";
import { useState } from "react";
import SideBar from "./Sidebar";
import Form from "./Form";
import Main from "./mainPage";
import "./App.css";
const App = () => {
  const [carDetails, setDetails] = useState({
    make: '',
    mileage: '',
    year: '',
    image: '',
    model: '',
    price: '',
  });
  // a function to collect the value of the input fields
  const carInfo = (e) => {
    setDetails({ ...carDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carDetails);
  };
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>

      <div className="side">
        <SideBar />
      </div>
      <div className="main">
        <Form
          onFormsubmit={handleSubmit}
          onCarInfoChange={carInfo}
          carDetails={carDetails}
        />
      </div>
    </div>
  );
};
export default App;
